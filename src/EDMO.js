import React from 'react';
import './ZLS.css';

import EDMOLogo from './imgs/edmo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function EDMO() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={EDMOLogo} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>EDMO</h3>
                <div className="proj-tags">
                    <p>EDUCATION</p>
                    <p>GAME DESIGN</p>
                    <p>LESSON PLANNING</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>June 2022 - August 2022</p>
            </div>
            <div className="proj-about-sec">
                <h2>Location</h2>
                <p>San Francisco, CA</p>
                <p>Sunset & Forest Hill</p>
            </div>
            <div className="proj-about-sec">
                <h2>Curriculum</h2>
                <p>Minecraft: Education Edition<br></br>Roblox Studio<br></br>Procreate<br></br>Scratch</p>
            </div>
            <div className="proj-about-sec">
                <h2>Grade Levels</h2>
                <p>1st-5th Grade</p>
            </div>
        </div>
        <div className="proj-sec">
            <h2>Why I Chose EDMO</h2>
            <p>EDMO is an organization based in the Bay Area that offers weekly paid summer camps each year to children centered around game design, science, social emotional skills, and more. Going into the summer following my sophomore year, I had no luck with my internship hunt.</p>
            <p>However, I saw a job posting for summer camps and EDMO really stood out to me because of the diverse game design programs they offered. Having been that kid who first got into coding when I was in summer camp, I thought it would be really unique to be able to provide that same experience to the next generation of children.</p>
        </div>
        <div className="proj-sec">
            <h2>What the Job Entailed</h2>
            <p>For my job, I would be in charge of lesson planning and leading two lessons per day. Since this was a summer camp, the other parts of the day would be covered by group games, recess, lunch, and rallies, where I would supervise or assist my coworkers in their duties. By schedule, a typical day would look like this:</p>
            <p style={{ textAlign: 'center' }}>Rally<br></br>Game Design Lesson<br></br>Recess<br></br>Group Games<br></br>Lunch<br></br>Game Design Lesson<br></br>Group Games<br></br>Rally</p>
        </div>
        <div className="proj-sec">
            <h2>What I Learned</h2>
            <p>For this being my first job in education, I found it very fulfilling. It gave me a satisfaction that no prior job had given me, as I really felt I was making an impact with my group of students. I also enjoyed the social aspect of the job, as even though it provided challenges at times with classrooms being unpredictable, I enjoyed building relationships with my fellow coworkers and students.</p>
            <p>One of the most challenging but enjoyable parts of the job was lesson planning. Even though EDMO provided a set curriculum, a lot of the time, I found that we would either go a lot faster. This would often leave 1 - 1.5 days at the end of the week where we had no planned activity. Due to this, my supervisor gave me a lot of freedom in lesson planning, allowing me to assign whatever activities I deemed fit, as long as it fit with the given week’s agenda. I really enjoyed this part because having played video games for my entire life, I loved being able to plan lessons around the very thing that I spent so much time on.</p>
            <p>By the end of this job, I really took education as a career path seriously. Prior, I had only been looking at computer science as an option, but now, I’m really open to either path/combined path. I look forward to what the future holds!</p>
        </div>
    </div>
  );
}

export default EDMO;
