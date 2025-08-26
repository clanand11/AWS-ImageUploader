const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage: storage , 
                        limits: {fileSize: 20* 1024 *1024} 
                      });
require('dotenv').config();

const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
});

const BucketName = process.env.S3_BUCKET_NAME;

router.post('/upload', upload.single('photo'), async (req,res) => {
    const file = req.file;
    if(!file){
      return res.status(400).json({message: 'No file uploaded!'});
    }
    const params = {
        Bucket : BucketName,
        Key: Date.now() + '_' + file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        // ACL: 'public-read',
    };
    try {
        const data = await s3.upload(params).promise();
        res.status(200).json({ message: 'Uploaded successfully', url: data.Location });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Upload failed', error: err.message });
      }
})

router.get('/list', async (req, res) => {
    try {
        const data = await s3.listObjectsV2({ Bucket: BucketName }).promise();
        const urls = data.Contents.map(item => {
          return `https://${BucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`;
        });
        res.json(urls);
      } catch (err) {
        console.log("BucketName:", JSON.stringify(BucketName));
        console.log("Region:", JSON.stringify(process.env.AWS_REGION));

        res.status(500).json({ error: err.message });
      }
})

module.exports = router;