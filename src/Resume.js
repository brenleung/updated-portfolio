import React from 'react';
import './Resume.css';
import ResumePDF from '../src/imgs/resume.pdf';

import whizkidz from '../src/imgs/whizkidz.png';

function Resume() {
  return (
    <div className="resume">
        <h3>Welcome to my resume.</h3>
        <p>This page is currently undergoing a revamp. An interactive resume will be here soon.</p>
        <div className="offlink">
            <p>📃 For a PDF version of my resume, click <a href={ResumePDF} target="_blank" rel="noreferrer">here</a>.</p>
        </div>
    </div>
  );
}

export default Resume;