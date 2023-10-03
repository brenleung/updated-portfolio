import React from 'react';
import './AgePredictor.css';

import AgePredictorImg from './imgs/agepredictor-2.png';
import Agify from './imgs/agify.png';
import AgePredictorScreen from './imgs/age-predictor-app.png';
import AgePredictorAccept from './imgs/age-predictor-enter.png';
import AgePredictorError from './imgs/age-predictor-error.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AgePredictor() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={AgePredictorImg} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>Age Predictor</h3>
                <div className="proj-tags">
                    <p>REACT.JS</p>
                    <p>API</p>
                    <p>USER FRIENDLY</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>2 hours | March 20, 2023</p>
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
                    <a href="https://github.com/brenleung/age-predictor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="proj-about-icon"/></a>
                    <a href="https://age-predictor-proj.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
            <h2>Why Was This Made?</h2>
            <p>This project was created as part of an application for a club at UC Davis. For this club, the requirement was to create an application that calls on an existing API. On the club’s website, they state that this project should not take more than five hours.</p>
            <p>Taking this into consideration with the little time I had, I decided to take on a project involving an API called Agify. Agify’s intention is for a user to input a name and would return an age that the user is currently. However, I decided to use it differently. Since the numbers that it would return were on the higher end and this application would be used by mostly college students, I decided to use Agify as an age predictor – to predict how old a person would live based on their name.</p>
            <img src={Agify} />
            <p className="caption">A screen grab of the Agify website!</p>
        </div>
        <div className="proj-sec">
            <h2>The Simple Part</h2>
            <p>To create the app, I kept it simple, focusing everything on one page. The main focus was to have an icon on the top, followed by a simple form asking the user to input a name. Upon clicking the enter button, the page would change with the predicted age.</p>
            <img src={AgePredictorScreen} />
            <p className="caption">The screen of the app upon loading.</p>
            <p>For this, I decided to use components, with the application stating the more components, the better. For this, my components were the form, button, and customizable image. However, for this project, I would only call upon each component once.</p>
        </div>
        <div className="proj-sec">
            <h2>Challenges with the Form</h2>
            <p>With the form, I would be taking on two concepts that I had little experience with. For the form, I required state management, since I needed a way to store the name, age and error validation for the user. The form would also be calling upon an API.</p>
            <img src={AgePredictorAccept} style={{ marginBottom: '10px' }}/>
            <img src={AgePredictorError} />
            <p className="caption">What showed when the name is accepted (top) vs. an error (bottom).</p>
            <p>Even though I had little experience with these, I was ready to take the challenge on. For state management, I decided to use UseState. Due to the amount of information online about this, it wasn’t too hard to pick up. I finished the form in roughly an hour. Also, with the API, it took a little trial and error, but ultimately was able to figure it out through get and then commands.</p>
        </div>
        <div className="proj-sec">
            <h2>Conclusion</h2>
            <p>Even though this project was not my greatest, I’m glad I took it on. Without projects, I found it difficult to learn new concepts, as reading articles isn’t a productive way to learn new information. I am thankful that this project allowed me to learn my first experience with APIs and UseState, as this helped me with my project in HackDavis! </p>
        </div>
    </div>
  );
}

export default AgePredictor;
