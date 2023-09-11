import React from 'react';
import './expbox.css';

function ExpBox({image, title, tag1, tag2, tag3, desc}) {
    return (
      <div className="exp-box">
        <div className="exp-photo">
            <img src={image} alt="project"/>
        </div>
        <div className="exp-text">
            <h2>{title}</h2>
            <div className="exp-tags">
                <p>{tag1}</p>
                <p>{tag2}</p>
                <p>{tag3}</p>
            </div>
            <p>{desc}</p>
        </div>
      </div>
    );
  }
  
export default ExpBox;