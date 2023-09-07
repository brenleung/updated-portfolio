import React from 'react';
import './AboutMe.css';

import Image from './components/image.js';

import young_me from './imgs/young-me.png';
import scratch from './imgs/scratch.png';
import scratch_project from './imgs/scratch-project.png';
import minesweeper from './imgs/minesweeper.png';
import hackdavis from './imgs/hackathon_group.jpg';
import edmo from './imgs/camp-edmo.png';
import snapshot_1 from './imgs/snapshot-1.png';
import snapshot_2 from './imgs/snapshot-2.png';
import snapshot_3 from './imgs/snapshot-3.png';
import snapshot_4 from './imgs/snapshot-4.png';
import snapshot_5 from './imgs/snapshot-5.png';
import snapshot_6 from './imgs/snapshot-6.png';

function AboutMe() {
    const italicStyle = {
        fontStyle: 'italic',
        fontWeight: 'normal',
    };
    
    return (
        <div>
        <div className="text-div">
            <div className="intro-img">
                <img src={young_me} alt="me"></img>
                <img src={scratch_project} alt="scratch project"></img>
            </div>
            <div className="intro-text">
                <div className="overflow-hidden drop-in">
                    <h3>It all started 10 years ago..</h3>
                </div>
                <div className="overflow-hidden drop-in-2">
                    <p>I've always had a knack for video games growing up, but no game caught my attention like <span className="bold green">Minecraft</span> has. Like many kids, this game was the source of all of my fun in my elementary years. I can't take tell you the amount of times I would spend 8-10 hours of my weekend playing this game with my friends. As entranced by gaming as I was, my mom decided to sign me up for a game design camp that summer.</p>
                    <p>Thus began my first experience with <span className="bold orange">Scratch</span>, and my love for coding was born. That summer, I worked on games both in and out of the classroom and eventually asked myself the question, <span className="bold">"When can I make games like <span style={italicStyle}>this</span> for a living?"</span></p>
                </div>
                <div className="scratch-out">
                    <img src={scratch} alt="scratch logo"></img>
                    <p>Play my first Scratch game <a href="https://scratch.mit.edu/projects/11507450/embed" target="_blank" rel="noreferrer">here!</a> (Warning: I was a devoted game designer, not a good one.)</p>
                </div>
            </div>
        </div>

        <div className="text-div">
            <div className="left-text">
                <h3>Fast forward a little..</h3>
                <p>In the years thereafter, my wish for becoming a game designer disappeared. <span className="bold">However, my love for coding did not.</span> I took AP Computer Science in high school and I credit my teacher, Mr. Simon, for making the class very interactive, allowing me to continue to grow as a developer and learn by creating useful and insightful programs, such as Minesweeper, an asteroids game, and more while learning the basics of computer science.</p>
                <div className="minesweeper-out">
                    <img src={minesweeper} alt="minesweeper logo"></img>
                    <p>Play one of my favorite programs from APCS that I made, <a href="https://brenleung.github.io/Minesweeper/" target="_blank" rel="noreferrer">Minesweeper!</a></p>
                </div>
                <p>While there are many paths in computer science, it is not until very recently that I discovered what I am passionate about. This past year, I discovered I am interested in <span className="bold">frontend and fullstack development.</span> I took opportunities, both solo and team-oriented, to further my growth as a developer in these areas. These include but are not limited to designing my first portfolio in HTML/CSS, creating a website for a nonprofit with a club on-campus, and participating in (and <span style={italicStyle}>winning</span>) my first hackathon! </p>
                <p>However, that is not the only thing I'm passionate about..</p>
            </div>
            <div className="right-img">
                <img src={hackdavis} alt="my group at hackdavis!"></img>
                <p className="caption">My group at HackDavis 2023!</p>
            </div>
        </div>

        <div className="text-div">
            <div className="left-img">
                <img src={edmo} alt="me"></img>
                <p className="caption">Posing with another instructor at Camp EDMO! (2022)</p>
            </div>
            <div className="right-text">
                <h3>From mentee to mentor..</h3>
                <p>In the summer of 2022, having had no luck with internships, I took a job at Camp EDMO as a tech instructor. To my surprise, <span className="bold">it was (and still is) one of the most enjoyable jobs I've had to date.</span> The combination of creating lessons about game design, camp spirit, and getting to impact lives the same way my teacher did for me 10 years ago made the job feel very fufilling in a way no other job had.</p>
                <div className="scratch-out">
                    <img src={scratch} alt="scratch logo"></img>
                    <p>Play a <a href="https://scratch.mit.edu/projects/721398119/embed" target="_blank" rel="noreferrer">target practice</a> game that I got to teach to students at EDMO!</p>
                </div>
                <p>Since that summer, I've held other education opportunities, being a coding instructor for WhizKidz Computer Center and most recently, a tech instructor assistant at TechKnowHow. Being able to combine two passions that I have (coding and education) has honestly been <span className="bold">a dream come true.</span></p>
                <p>I realized that I also have a passion for education and being able to work with the next generation. As I venture through this next chapter in my life, I'm keeping an open attitude to jobs in frontend/fullstack development, but also in education as well.</p>
            </div>
        </div>

        <h3 className="photo-txt" style={{ textAlign: 'center' }}>Lastly, a few snapshots from my life..</h3>
        <div className="photo-grid">
            <Image image={snapshot_1} caption={"Frozen treats at Disneyland!"}/>
            <Image image={snapshot_2} caption={"Sushi is one of my favorite foods."}/>
            <Image image={snapshot_3} caption={"SF exploring with friends!"}/>
        </div>
        <div className="photo-grid">
            <Image image={snapshot_4} caption={"First time moped riding."}/>
            <Image image={snapshot_5} caption={"As a Davis student, we went to lots of Kings games!"}/>
            <Image image={snapshot_6} caption={"On-campus photo on Picnic Day (a Davis classic)."}/>
        </div>
        </div>
    );
}

export default AboutMe;