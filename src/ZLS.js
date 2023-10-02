import React from 'react';
import './ZLS.css';

import ZionLutheran from './imgs/zion.jpg';
import OldZLS from './imgs/old-zls.png';
import ZLSGif from './imgs/zsf.gif';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ZLS() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={ZionLutheran} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>Zion Lutheran Redesign</h3>
                <div className="proj-tags">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>USER FRIENDLY</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>September 2022 - January 2023</p>
            </div>
            <div className="proj-about-sec">
                <h2>Tech Stack</h2>
                <p>HTML/CSS</p>
                <p>jQuery</p>
            </div>
            <div className="proj-about-sec">
                <h2>Links</h2>
                <div className="proj-about-icon">
                    <a href="https://github.com/brenleung/zion-website-redesign" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="proj-about-icon"/></a>
                    <a href="https://zionsfschool.netlify.app" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
            <h2>The Idea</h2>
            <p>Going into the 2022-23 school year, I wanted to take on a side project that would allow me to grow as a frontend developer while also being a project that I could be inspired by. The summer prior, I worked for a summer camp called EDMO where I taught game design to elementary schoolers and really took a liking to the world of education.</p>
            <p>Following this experience, I decided to work for my alma mater, Zion Lutheran. I really enjoyed my experience there and something that I noticed about them was that their website lacked a modern appeal. The website had largely stayed the same throughout the 2010s, and so, I decided to take on this project for my own. With this experience working there and my large interest in both development and education, I thought this would be the perfect project to take on to start the school year.</p>
        </div>
        <div className="proj-sec">
            <h2>The Vision</h2>
            <p>Looking at their old website, I noticed the design style looked very outdated. It featured misplaced logos, large photos, and inconsistent fonts.</p>
            <img src={OldZLS} alt="The Old Zion Lutheran website"></img>
            <p className="caption">The old homepage, which featured large photos and various fonts.</p>
            <p>I envisioned a new website for them that would feature a more simplistic design, focused around their main color scheme of white and dark green. One of the biggest draws I wanted was a visually appealing homepage that could keep viewers interested. I came up with a homepage with snap scrolling that would tell users small tidbits about the school, while allowing interested users to keep interacting with the website.</p>
            {/* insert design sketch here */}
        </div>
        <div className="proj-sec">
            <h2>Lack of Experience</h2>
            <p>Having had almost no prior experience with frontend development (other than creating my first personal portfolio), I had a lot of trouble creating designs from my head to the computer. It required a lot of research and debugging, as there would be misaligned divs, incorrect behavior (like the snap-scrolling not working), and more.</p>
            <img src={ZLSGif} alt="A gif going through the new ZLS snap-scrolling features"></img>
            <p className="caption">A demonstration of the snap-scrolling, once I was able to get it working!</p>
            <p>In addition, it was my first time working with media queries and although I did not make the website accessible through mobile, I had a lot of trouble making it accessible through different media sizes. However, after trial and error and doing research about how media queries worked, I was able to get it done!</p>
        </div>
        <div className="proj-sec">
            <h2>Looking Back</h2>
            <p>Having been over 8 months removed from this project, there would be a lot of things I would do differently knowing what I know about frontend development. Firstly, a lot of my elements were not flexbox, which made things a lot more difficult when trying to move elements around through media queries. Without this lack of consistency, it made my code more jumbled and harder to understand. With a project like this, I would’ve used flexbox for all of my divs to keep everything consistent.</p>
            <p>However, this project was a <span className="italics">great</span> start into letting me grow as a developer. As they say, there’s no experience like coding projects yourself!</p>
            <p>My hope in the future is to be able to present this website to the school as a way for them to update their website themselves. However, I would like to redesign my redesign in order to optimize this website better before doing so. As Zion is my alma mater, being able to provide for them as an alumni is something I hope to continue to do and being able to provide an entirely new website is one way of doing so.</p>
        </div>
    </div>
  );
}

export default ZLS;
