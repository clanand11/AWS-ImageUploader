import React from 'react'
import './CSS/Uploads.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Uploads = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/photos/list`)
      .then(res => setPhotos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <div className='contentHolder'>
  <div className='imageGrid'>
    {photos.map((url, index) => (
      <div key={index} className='imageWrapper'>
        <img src={url} alt={`img-${index}`} />
      </div>
    ))}
  </div>
</div>

        </>
  )
}

export default Uploads