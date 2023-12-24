// ImageUploader.js
import React, { useState } from 'react';
import './ImageUploader.css';
import {Link} from 'react-router-dom'
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedInfo, setExtractedInfo] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  };
  
  const handleExtractInfo = () => {
    // Dummy extracted information for demonstration purposes
    const dummyInfo = 'Sample extracted information';
    setExtractedInfo(dummyInfo);
  };
 const handleGet = () => {
  
 }
  return (
    <div className="image-uploader-container">
    <form action="http://localhost:5000/api/extract/add" method="post" enctype="multipart/form-data">
      <label className="upload-image">
     
        <input name='uploaded_file' id='uploaded_file' type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
     
        {!selectedImage ? (
          <p>Click or drag an image to upload</p>
        ) : (
          <div className="image-preview">
            <img src={selectedImage} alt="Selected" className="selected-image" />
          </div>
        )}
      </label>
      <button onClick={handleExtractInfo} className="extract-info-btn">Extract Information</button>
      <Link className="Dora" to="/getall">Get All</Link>
    </form>
      {extractedInfo && <p>{extractedInfo}</p>}
  </div>
  );
};

export default ImageUploader;
