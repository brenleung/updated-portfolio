import React from 'react';
import './PersonalPortfolio.css';

import PortfolioImg from './imgs/portfolio.png';
import PortfolioColorP from './imgs/portoflio-color-palette.png';
import PortfolioInspiration from './imgs/portfolio-inspiration.png';
import PortfolioResume1 from './imgs/portfolio-resume1.png';
import PortfolioResume2 from './imgs/portfolio-resume2.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PersonalPortfolio() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={PortfolioImg} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>Personal Portfolio</h3>
                <div className="proj-tags">
                    <p>REACT.JS</p>
                    <p>DESIGN-ORIENTED</p>
                    <p>RESPONSIVE</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>June 2023 - October 2023</p>
            </div>
            <div className="proj-about-sec">
                <h2>Tech Stack</h2>
                <p>React.js</p>
                <p>HTML/CSS</p>
                <p>Javascript</p>
            </div>
            <div className="proj-about-sec">
                <h2>Links</h2>
                <div className="proj-about-icon">
                    <a href="https://github.com/brenleung/updated-portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="proj-about-icon"/></a>
                    <a href="https://brenleung.netlify.app" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
            <h2>The Idea</h2>
            <p>I first created my original portfolio in Spring 2022. However, this was my first project in frontend and it had a lot of flaws. It lacked an appeal for visual design, didn’t have any media responsiveness, and was very raw – it only used HTML/CSS.</p>
            <p>It had since been a year removed from that project and I have grown tremendously as a frontend developer. I have made projects in React and even won a hackathon. I decided it was time to recreate my portfolio. With this new portfolio, my hope was for the following:</p>
            <ol>
              <li><span className="bold">Media responsiveness:</span> I really wanted my new portfolio to be accessible and look good on all sizes, whether mobile or desktop!</li>
              <li><span className="bold">Visual appeal:</span> for my past projects, the only goal was that it was working and that I was learning. However, I felt I was ready to take on the challenge of creating a website that is visually appealing too!</li>
              <li><span className="bold">Animations:</span> something I really liked from websites like Apple is how they have animations that make the website consistently appealing to its users. I wanted to include animations in my new portfolio!</li>
            </ol>
            <p>And so, I was off. I was working full-time in the summer, but in the time that I had available, I began constructing my portfolio..</p>
        </div>
        <div className="proj-sec">
            <h2>How'd the Design Happen?</h2>
            <p>Without a designer nor experience in Figma, the designs for my website came entirely mentally. One of the most important things for me was the color palette of the website. I experienced with different color palettes, but I ended with one that focused on a more education-centric palette, since that is one of my interests.</p>
            <img src={PortfolioColorP}></img>
            <p>However, this color palette gave five colors to choose from, and I would need to narrow down my search. Looking online, however, showed me that a cream white and dark blue was a common color combination and is one that is very visually appealing.</p>
            <img src={PortfolioInspiration}></img>
            <p className="caption">A website I took a lot of inspiration from was EnjoyBball!</p>
        </div>
        <div className="proj-sec">
            <h2>And Then Came the Rest..</h2>
            <p>In the ensuing months, I created the following pages of my portfolio: the homepage, resume, and contact page. The resume page was one of the most challenging pages, but it allowed me to learn a lot more about React.</p>
            <p>The main reason for this is because I wanted a resume page that was interactive. For my last portfolio, my resume page was a simple display of my PDF. However, I wanted users to feel like they were interacting with my website, going back to my goals from earlier. So, for this, after looking at examples online, I decided to go with one that would change by showing one section at a time.</p>
            <p>In order to maintain the integrity of the webpage, I needed to use Javascript and state management in order to change what was showing on the resume page with each arrow click. This required a few Google searches, but overall, did not take more than a couple hours. I’m very proud of how it turned out!</p>
            <img src={PortfolioResume1} style={{ marginBottom: '10px' }}></img>
            <img src={PortfolioResume2}></img>
            <p className="caption">My inspiration came from Charlie Isslander (top) and the result (bottom)</p>
        </div>
        <div className="proj-sec">
            <h2>Last, But Not Least</h2>
            <p>This past month, I’ve decided to work on the projects page. I saved it for last because I knew I wanted this to be visually appealing and needed to showcase all of the project information I had been working on in the past year.</p>
            <p>First off came the cards. Even though I created cards for my best projects on the homepage, I wanted cards that would be slimmer, smaller, yet still show off my projects. For this, I decided to go with a more vertical approach that allowed for up to three cards showing at a time.</p>
            <p>I also decided to write up each of my project case studies out and showcase them with photos! Animations for these pages will be coming soon when I get the time!</p>
        </div>
        <div className="proj-sec">
            <h2>The End?</h2>
            <p>As this project comes to a close, I’m so proud of myself for being able to get this done. I think at times, especially when the summer got busy, it was hard for me to find time to be able to work on this project. However, I did eventually find the time and I really like how it turned out.</p>
            <p>In addition, this project allowed me to grow a lot on the frontend side of things. I would still stay team projects are the best and fastest place to learn, but with so many resources out there, I definitely was able to pick up a lot of React and design skills by taking on such a large project on my own. I look forward to whatever project comes my way next!</p>
        </div>
    </div>
  );
}

export default PersonalPortfolio;
