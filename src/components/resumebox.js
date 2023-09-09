import React from 'react';
import './resumebox.css';

function ResumeBox({year, title, company, desc}) {
    return (
      <div className="resume-box">
        <p className="bold year">{year}</p>
        <div className="title">
            <h2>{title}</h2>
            <p className="title-company">{company}</p>
        </div>
        <p className="desc">{desc}</p>
      </div>
    );
  }
  
export default ResumeBox;