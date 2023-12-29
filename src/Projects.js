import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

import ExpBox from './components/expbox';

import GluChart from './imgs/gluchart-2.png';
import ZLS from './imgs/zion-2.jpg';
import IELC from './imgs/ielc-2.png';
import portfolio from './imgs/portfolio.png';
import age from './imgs/agepredictor-2.png';
import asteroids from './imgs/asteroids.png';
import edmo from './imgs/edmo.png';
import tkh from './imgs/tkh.png';
import whizkidz from './imgs/whizkidz.png';
import boporflop from './imgs/boporflop.png';

function Projects() {
  return (
    <div>
    <div className="projects-page drop-in">
        <h3>Projects 👨🏻‍💻</h3>
        <div className="projects-row">
            <Link to="/projects/gluchart"><ExpBox image={GluChart} title="GluChart 🏆" tag1="REACT.JS" tag2="TEAM PROJECT" tag3="AWARD WINNING" desc="Machine learning application used to determine future glucose levels. Completed in 24 hours at HackDavis. Won Best Hack for Social Good and Best Healthcare Hack."/></Link>
            <Link to="/projects/boporflop"><ExpBox image={boporflop} title="Bop or Flop?" tag1={"MACHINE LEARNING"} tag2={"PYTHON"} tag3={"TEAM PROJECT"} desc={"Machine learning application that uses a regression model to determine if a song is popular or not based on given song attributes."} /></Link>
            <Link to="/projects/zls-redesign"><ExpBox image={ZLS} title="Zion Lutheran Redesign" tag1={"HTML"} tag2={"CSS"} tag3={"USER-FRIENDLY"} desc={"Redesigned the website of my alma mater using HTML, CSS, and JavaScript. Currently functional using Netlify."} /></Link>
        </div>
        <div className="projects-row">
            <Link to="/projects/ielc"><ExpBox image={IELC} title={"IELC Website"} tag1={"REACT.JS"} tag2={"NODE.JS"} tag3={"TEAM PROJECT"} desc={"Short for Interactive Elementary Learning Center, this website was for a nonprofit located in Davis and was created by a team of fullstack developers in ~10 weeks. Was created as a part of the UC Davis organization #include."} /></Link>
            <Link to="/projects/portfolio"><ExpBox image={portfolio} title="Personal Portfolio" tag1="REACT.JS" tag2="DESIGN-ORIENTED" tag3="RESPONSIVE" desc="As a summer project, I re-designed my personal portfolio with one that is user-friendly, design-oriented, and responsive to all screen sizes."/></Link>
            <Link to="/projects/asteroids"><ExpBox image={asteroids} title="Asteroids!" tag1="JAVA" tag2="APCS" tag3="GAME DESIGN" desc="As a project for AP Computer Science A, I created an asteroids game that requires the player to shoot at moving asteroids. The game includes a health and scoring system."/></Link>
        </div>
        <div className="projects-row">
            <Link to="/projects/age-predictor"><ExpBox image={age} title={"Age Predictor"} tag1={"REACT.JS"} tag2={"API"} tag3={"USER-FRIENDLY"} desc={"Created in under two hours, this simple JavaScript application calls upon an API to gather an age prediction based on your name."} /></Link>
        </div>
        <h3>Education Experiences 🧑🏻‍🏫</h3>
        <div className="projects-row">
            <Link to="/projects/edmo"><ExpBox image={edmo} title="EDMO" tag1="EDUCATION" tag2="GAME DESIGN" tag3="LESSON PLANNING" desc="As my first education job, I worked as a tech instructor for EDMO in the summer of 2022."/></Link>
            <Link to="/projects/techknowhow"><ExpBox image={tkh} title="TechKnowHow" tag1="EDUCATION" tag2="GAME DESIGN" tag3="CREATIVITY" desc="This past summer, I worked for TechKnowHow, where lessons were taught surrounding game design, robotics, and creativity."/></Link>
            <Link to="/projects/whizkidz"><ExpBox image={whizkidz} title="WhizKidz Computer Center" tag1="EDUCATION" tag2="REMOTE" tag3="LESSON PLANNING" desc="I taught 8-week remote sessions to teenagers surrounding various coding subjects, including Java, Javascript, Python, and more."/></Link>
        </div>
    </div>
    </div>
  );
}

export default Projects;
