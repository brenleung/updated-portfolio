import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import ProjectBox from './components/projectbox.js';

import personal_photo from './imgs/photo.png';
import gluchart from './imgs/gluchart.jpg';
import zion from './imgs/zion.jpg';
import ielc from './imgs/ielc.jpg';
import age_predictor from './imgs/agepredictor.jpg';

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
                    <p>I'm from <span style={{color: '#AA0000'}}>San Francisco</span> and am an incoming fourth year computer science student at UC Davis specializing in <span className="hover">frontend development</span>, <span className="hover">fullstack development</span>, and <span className="hover">education</span>.</p>
                    <p>My story, however, doesn't stop there..</p>
                    <Link to="/"><h2>Learn more about my story ➩</h2></Link>
                </div>
            </div>
        </div>
        <div className="projects">
            <div className="text-2">
                <h3>Here is some of my best work:</h3>

                <Link to="/"><ProjectBox image={gluchart} title={"GluChart"} tag1={"REACT.JS"} tag2={"TEAM PROJECT"}
                tag3={"AWARD WINNING"} description={"Machine learning application used to determine future glucose levels. Completed in 24 hours at HackDavis. Won Best Hack for Social Good and Best Healthcare Hack."}/></Link>
                
                <Link to="/"><ProjectBox image={zion} title={"Zion Lutheran Redesign"} tag1={"HTML"} tag2={"CSS"}
                tag3={"USER-FRIENDLY"} description={"Redesigned the website of my alma mater using HTML, CSS, and JavaScript. Currently functional using Netlify."}/></Link>

                <Link to="/"><ProjectBox image={ielc} title={"Interactive Elementary Learning Center"} tag1={"REACT.JS"} tag2={"NODE.JS"}
                tag3={"TEAM PROJECT"} description={"Website of a nonprofit located in Davis and was created by a team of fullstack developers in ~10 weeks. Was created as a part of the UC Davis organization #include."}/></Link>

                <Link to="/"><ProjectBox image={age_predictor} title={"Age Predictor"} tag1={"REACT.JS"} tag2={"API"} tag3={"USER-FRIENDLY"} description={"Created in under two hours, this simple JavaScript application calls upon an API to gather an age prediction based on your name."}/></Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  