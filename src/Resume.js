import React from 'react';
import './Resume.css';
import ResumePDF from '../src/imgs/resume.pdf';

import whizkidz from '../src/imgs/whizkidz.png';

function Resume() {
  return (
    <div className="resume">
        <h3>Interactive Resume</h3>
        <p>For a PDF version of my resume, click <a href={ResumePDF} target="_blank" rel="noreferrer">here</a>.</p>
        <div className="resume-section">
            <h2>WORK EXPERIENCE</h2>
            <hr></hr>
            <div className="resume-box">
                <h3 className="year">2023</h3>
                <div className="resume-box-2">
                    <h3>WhizKidz Computer Center</h3>
                    <h2>March 2023 - Present</h2>
                    <p>Conducted small-group, weekly classes on introductory computer science concepts in Java, Python, and more, resulting in improved student comprehension at a young age. Designed and created supplementary lesson material using coding examples and slide decks to aid students effectively.</p>
                </div>
                <img src={whizkidz}></img>
            </div>
        </div>
    </div>
  );
}

export default Resume;