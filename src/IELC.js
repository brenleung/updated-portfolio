import React from 'react';

import IELCImg from './imgs/ielc-2.png';
import SocIcons from './imgs/icons.png';
import IELCOverview from './imgs/ielc-page.png';
import IELCOverview2 from './imgs/ielc-page-2.png';
import IELCTeam from './imgs/ielc-team-meeting.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe }from "@fortawesome/free-solid-svg-icons";

function IELC() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={IELCImg} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>Interactive Elementary Learning Center</h3>
                <div className="proj-tags">
                    <p>REACT.JS</p>
                    <p>NODE.JS</p>
                    <p>TEAM PROJECT</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>February 2023 - April 2023</p>
            </div>
            <div className="proj-about-sec">
                <h2>The Team</h2>
                <p>Austin Shih (team lead)</p>
                <p>Yugi Retharekar (team lead)</p>
                <p>Brendan Leung</p>
                <p>Amy Yu</p>
                <p>Samantha Iraheta</p>
                <p>Ayaan Puri</p>
                <p>Emily Ng</p>
                <p>Darshan Shivakumar</p>
                <p>and more..</p>
            </div>
            <div className="proj-about-sec">
                <h2>Tech Stack</h2>
                <p>React.js</p>
                <p>Node.js</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
            </div>
            <div className="proj-about-sec">
                <h2>Links</h2>
                <div className="proj-about-icon">
                    <a href="https://www.ielctutoring.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
          <h2>About the Project</h2>
          <p>Our group was a part of a campus club called #include at Davis, which is a “student-run organization at UC Davis that builds websites and mobile apps for local organizations in the Sacramento and Davis community.” When I signed up for this club, something that really appealed to me was that not only was this a club that created products on cross-functional teams (developers and designers), but they were also creating usable products for local organizations (something that other clubs at UC Davis do not offer).</p>
          <p>For this product, this would be a quarter-long project (roughly 3 months) that would be created for Interactive Elementary Learning Center, a new student-created organization that hoped to offer tutoring services in Davis. Since this was a new organization, they lacked the resources necessary to make a website and were hoping for a website that would accurately display their mission, goals, and services.</p>
        </div>
        <div className="proj-sec">
          <h2>The Timeline</h2>
          <p>Like most products, the design team took on this project first, creating mockups and designs of our future website on Figma. This took about a month. In the meantime, the development team took on the project of learning a lot about the tech stack we were to take on. Since a lot of us had little experience in frontend development including me, it was incredibly important to learn more while we could. This meant taking classes taught by our tech leads centered around HTML/CSS, React, and Node.</p>
          <img src={IELCTeam}></img>
          <p className="caption">The first meeting with the development team, where we learned about GitHub!</p>
          <p>Following these classes, the new two months would be our turn. It was our time to shine and use our newly-learned skills to create this website!</p>
        </div>
        <div className="proj-sec">
          <h2>My Assignment</h2>
          <p>Each member of the team took on a different page or component of the website. For me, I started by creating a component, followed by a page.</p>
          <p>The first component I created were the social media icons. The icons were available through the Figma file that we had, but we wanted a way to easily resize them and change their color as necessary. Prior to this, I had no experience working with components, especially ones that took arguments. However, after a quick Google search, I realized that components worked a lot like functions, which were an essential part of computer science basics.</p>
          <img src={SocIcons}></img>
          <p className="caption">The social media icons that I was working with!</p>
          <p>The page that I created was an overview page for the program. Since IELC’s goal was to work primarily in the summer, I needed to create a page that would showcase this. My page needed to showcase three things:</p>
          <ul>
            <li>An intro splash/image</li>
            <li>A basic intro paragraph</li>
            <li>Buttons that could redirect elsewhere, whether to other grade levels or to an application</li>
          </ul>
        </div>
        <div className="proj-sec">
          <h2>Overcoming Challenges</h2>
          <p>Compared to my Zion Lutheran redesign, something that I needed to do with this website was to create a page that could work both on mobile and desktop. Under the guidance of our tech lead, their recommendation was to create <span className="italics">mobile first</span>. While I had no experience doing this, this was a great idea, combined with their strict guidelines of structuring everything through flexbox.</p>
          <p>By doing mobile first, it eliminated the challenges that I had in my prior project. This was due to using both a combination of a lack of flexbox and by doing desktop first, everything became misaligned when the screen size changed. However, by doing mobile first, it allowed for easy expansion afterwards.</p>
          <p>Most of the challenges with this project could be solved within a quick Google search or with a quick chat with our tech leads. I think something I really enjoyed about this project was having someone to help me within a moment’s notice, compared to when I was doing solo projects. Even in times where our team lacked proper communication online, we could usually figure things out through our weekly meetings in person.</p>
        </div>
        <div className="proj-sec">
          <h2>In the End..</h2>
          <p>Overall, I really enjoyed this project. This was my first experience with React, while also being my first time working in a team-oriented environment going through the software development life cycle. Even though this didn’t exactly mimic the industry lifestyle, I think it was a good peek into what working on projects in an industry-like environment could be like.</p>
          <p>It also allowed me to practice my communication skills with other developers, while also speeding up my learning processes by being able to have someone to mentor me. I definitely found that having someone within minutes’ access allowed me to learn a lot quicker, compared to prior projects where I was working on my own.</p>
          <p>This was also the first time I was required to code a project based off of a Figma file. Because of this, I think it gave me a lot of experience of what it would be like in the design/frontend industry. Overall, my application page turned out very well and it mirrored very closely to what the Figma file had planned!</p>
          <img src={IELCOverview} style={{ marginBottom: '10px' }} />
          <img src={IELCOverview2}></img>
          <p className="caption">The completed IELC page that I worked on!</p>
          <p>Going into the 2023-24 school year, I hope I have the ability to work on more team projects in the future!</p>
        </div>
    </div>
  );
}

export default IELC;
