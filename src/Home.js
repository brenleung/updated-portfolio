import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import ProjectBox from './components/projectbox.js';

import personal_photo from './imgs/photo.png';
import gluchart from './imgs/gluchart.jpg';
import zion from './imgs/zion.jpg';
import ielc from './imgs/ielc.jpg';
import boporflop from './imgs/boporflop.png';

function Home() {
    return (
      <div>
        <div className="home-col">
            <div className="img">
                <img src={personal_photo} alt="me"></img>
            </div>
            <div className="text">
                <div className="overflow-hidden drop-in">
                    <h3>Hi! 👋 My name is Brendan.</h3>
                </div>
                <div className="overflow-hidden drop-in-2">
                    <p>I'm from <span style={{color: '#AA0000'}}>San Francisco</span> and am a fourth year computer science student at UC Davis specializing in <span className="hover">frontend development</span>, <span className="hover">fullstack development</span>, and <span className="hover">education</span>.</p>
                    <p>My story, however, doesn't stop there..</p>
                    <Link to="/about-me"><h2>Learn more about my story ➩</h2></Link>
                </div>
            </div>
        </div>
        <div className="projects">
            <div className="text-2">
                <h3>Here is some of my best work:</h3>

                <Link to="/projects/gluchart"><ProjectBox image={gluchart} title={"GluChart"} tag1={"REACT.JS"} tag2={"TEAM PROJECT"}
                tag3={"AWARD WINNING"} description={"Machine learning application used to determine future glucose levels. Completed in 24 hours at HackDavis. Won Best Hack for Social Good and Best Healthcare Hack."}/></Link>

                <Link to="/projects/boporflop"><ProjectBox image={boporflop} title={"Bop or Flop?"} tag1={"MACHINE LEARNING"} tag2={"PYTHON"} tag3={"TEAM PROJECT"} description={"Machine learning application that uses a regression model to determine if a song is popular or not based on given song attributes."}/></Link>
                
                <Link to="/projects/zls-redesign"><ProjectBox image={zion} title={"Zion Lutheran Redesign"} tag1={"HTML"} tag2={"CSS"}
                tag3={"USER-FRIENDLY"} description={"Redesigned the website of my alma mater using HTML, CSS, and JavaScript. Currently functional using Netlify."}/></Link>

                <Link to="/projects/ielc"><ProjectBox image={ielc} title={"Interactive Elementary Learning Center"} tag1={"REACT.JS"} tag2={"NODE.JS"}
                tag3={"TEAM PROJECT"} description={"Website of a nonprofit located in Davis and was created by a team of fullstack developers in ~10 weeks. Was created as a part of the UC Davis organization #include."}/></Link>
            </div>
        </div>

        <div className="contact-link">
            <h3>Like what you see?</h3>
            <p>Feel free to view more of <Link to="/projects">my work</Link>, view <Link to="/resume">my resume</Link>, or <Link to="/contact">contact me</Link>.</p>
        </div>
      </div>
    );
  }
  
  export default Home;
  