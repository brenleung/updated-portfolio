import React from 'react';
import './Whizkidz.css';

import WhizkidzLogo from './imgs/whizkidz.png';
import connect4 from './imgs/connect4.png';

function Whizkidz() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={WhizkidzLogo} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>TechKnowHow</h3>
                <div className="proj-tags">
                    <p>EDUCATION</p>
                    <p>REMOTE</p>
                    <p>LESSON PLANNING</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>March 2023 - Present</p>
            </div>
            <div className="proj-about-sec">
                <h2>Location</h2>
                <p>Remote</p>
            </div>
            <div className="proj-about-sec">
                <h2>Curriculum</h2>
                <p>Java</p>
            </div>
            <div className="proj-about-sec">
                <h2>Grade Levels</h2>
                <p>5th Grade - High School</p>
            </div>
        </div>
        <div className="proj-sec">
            <h2>How I Arrived</h2>
            <p>Going into the school year, after working for EDMO, I wanted to continue teaching. However, since I was a full time student, I wanted to look for a job where I could teach remotely, especially in the technology/computer science sector.</p>
            <p>WhizKidz really stood out to me due to its wide variety of classes offered. Originally based in San Jose, WhizKidz has moved to a remote learning center since the pandemic. They specialize in teaching classes in many languages including Java, Python, Scratch, web development, and more. Because of this, I thought this would be the perfect place for me to be able to teach computer science, while also honing my skills down as internship season neared.</p>
        </div>
        <div className="proj-sec">
            <h2>The Structure</h2>
            <p>WhizKidz’s classes are also special because the ratio of student to teacher is at most 4:1. These classes often take place either after school or on Saturdays weekly for 8 weeks. WhizKidz provides a brief overview for the curriculum, providing some slidedecks and brief bullet points of what should be covered. In addition, outlines for coding activities are also provided online. However, the rest is up to the instructor. I really enjoyed this aspect of WhizKidz, as while I was told what to teach, I could structure the lesson in the way I felt was best. This meant making slidedecks and activities as necessary.</p>
        </div>
        <div className="proj-sec">
            <h2>My Experience</h2>
            <p>So far, I’ve taught two sessions at WhizKidz, both in Java. I’ve taught an AP Computer Science recap course and an introductory course. I’ve really enjoyed my time thus far, as it’s allowed me to explore new horizons with my teaching. With remote teaching, I had no experience prior, so it definitely took an adjustment going from in-person to online teaching. Though I prefer in-person teaching, I’m thankful for the opportunities it’s given me and I look forward to teaching more at WhizKidz in the future!</p>
            <img src={connect4} alt="connect 4"></img>
            <p className="caption">One of the final projects for the Java course, Connect 4</p>
        </div>
    </div>
  );
}

export default Whizkidz;
