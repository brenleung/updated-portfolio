import React from 'react';
import './image.css';

function Image({image, caption}) {
    return (
      <div className="image-box">
        <img src={image} alt="img is supposed to be here"/>
        <p className="caption">{caption}</p>
      </div>
    );
  }
  
export default Image;