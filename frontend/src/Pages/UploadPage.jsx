import React from 'react'
import './CSS/UploadPage.css'
import { useState } from 'react'
import axios from 'axios'

const API_URL=process.env.REACT_APP_API_URL;


const UploadPage = () => {

  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('photo',file);

    try {
      const res = await axios.post(`${API_URL}/photos/upload`, formData);
      setUploadedUrl(res.data.url);
    } catch (err) {
      alert('Upload failed');
    }

  }

  return (
    <div className='contentHolder'>
      <div className='uploadBox'>
        <label htmlFor="fileUpload" className='uploadLabel'>Upload here</label>
        <input id='fileUpload' style={{display:'none'}} type="file" onChange={(e) => setFile(e.target.files[0])} />
        
        <div className="fileNameContainer">
          {file && <p className='fileName'>{file.name}</p>}
        </div>

        <button className='uploadBtn' onClick={handleUpload} >Upload</button>
        </div>
      {uploadedUrl && (
        <div className='acceptedBox'> 
          <img src={uploadedUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
          <p >Uploaded</p>
        </div>
      )}
      
    </div>
  )
}

export default UploadPage