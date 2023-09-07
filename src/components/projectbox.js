import React from 'react';
import './projectbox.css';

function ProjectBox({image, title, tag1, tag2, tag3, description}) {
    return (
      <div className="project-box">
        <div className="proj-photo">
            <img src={image} alt="project"/>
        </div>
        <div className="proj-text">
            <h2>{title}</h2>
            <div className="tags">
                <p>{tag1}</p>
                <p>{tag2}</p>
                <p>{tag3}</p>
            </div>
            <p>{description}</p>
        </div>
      </div>
    );
  }
  
export default ProjectBox;