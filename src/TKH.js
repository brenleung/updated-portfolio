import React from 'react';
import './TKH.css';

import TKHLogo from './imgs/tkh.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function TKH() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={TKHLogo} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>TechKnowHow</h3>
                <div className="proj-tags">
                    <p>EDUCATION</p>
                    <p>GAME DESIGN</p>
                    <p>CREATIVITY</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>June 2023 - August 2023</p>
            </div>
            <div className="proj-about-sec">
                <h2>Location</h2>
                <p>San Francisco, CA</p>
                <p>Sunset & Glen Park</p>
            </div>
            <div className="proj-about-sec">
                <h2>Curriculum</h2>
                <p>Minecraft<br></br>LEGO<br></br>Robotics<br></br>Scratch</p>
            </div>
            <div className="proj-about-sec">
                <h2>Grade Levels</h2>
                <p>1st-5th Grade</p>
            </div>
        </div>
        <div className="proj-sec">
            <h2>What TechKnowHow Does</h2>
            <p>TechKnowHow is a summer camp organization that specializes in creating technology camps for the next generation for almost 30 years. They are stationed in the Bay Area, with camps in over 5 cities. As of this past summer, their camps were centralized around Minecraft, Scratch, LEGOs, and robotics, offering camps to elementary and middle schoolers.</p>
        </div>
        <div className="proj-sec">
            <h2>Why I Chose TechKnowHow</h2>
            <p>Going into my junior year, I applied to over 100 internships. However, due to the fluctuating job market and varying experience levels in development, I was unable to secure an internship. Having really enjoyed my experience as a technology instructor the summer prior, I decided to find another summer camp to teach that fulfilled my needs. For me, I wanted a summer camp that revolved around technology, and TechKnowHow met a lot of those checkboxes.</p>
        </div>
        <div className="proj-sec">
            <h2>What I Did</h2>
            <p>At TechKnowHow, our days were surrounded with projects and supplemental videos. Unlike with EDMO the year prior, the curriculum was created from start to finish already and had little room for change. A typical day at TechKnowHow looked like the following:</p>
            <p style={{ textAlign: 'center' }}>Intro Game<br></br>Activity 1 (LEGOs)<br></br>Recess<br></br>Continue Activity 1<br></br>Lunch<br></br>Activity 2 (Minecraft/Scratch)<br></br>Recess<br></br>Continue Activity 2</p>
            <p>Because the curriculum was already settled, most of my job consisted of watching over the students and ensuring they understood what the task at hand was. This involved improving in classroom management, facilitating instruction, and working with smaller groups.</p>
            <p>Compared to EDMO, this camp definitely had a more consistent routine. Though I enjoyed the freedom of working at EDMO more, I still learned a lot about education and working with students. One of the most enjoyable parts of this job was the ability to see their excitement in working with LEGOs and being able to help them with their projects to maximize their creativity.</p>
        </div>
    </div>
  );
}

export default TKH;
