import React from 'react';
import './Home.css';
import personal_photo from './imgs/photo.png'

function Home() {
    return (
      <div>
        <div className="home-col">
            <div className="img">
                <img src={personal_photo} alt="me"></img>
            </div>
            <div className="text">
                <h3>Hi! 👋 My name is Brendan.</h3>
                <p>I'm from <span style={{color: '#AA0000'}}>San Francisco</span> and am an incoming fourth year computer science student at UC Davis specializing in <span className="hover">frontend development</span>, <span className="hover">fullstack development</span>, and <span className="hover">education</span>.</p>
                <p>My story, however, doesn't stop there..</p>
                <h2>Learn more about my story ➩</h2>
            </div>
        </div>
        <div className="projects">
            <div className="text-2">
                <h3>Here is some of my best work:</h3>
                <h2>GluChart</h2>
                <p>Machine learning application used to determine future glucose levels. Completed in 24 hours at HackDavis. Won Best Hack for Social Good and Best Healthcare Hack.</p>

                <h2>Zion Lutheran Redesign</h2>
                <p>Redesigned the website of my alma mater using HTML, CSS, and JavaScript. Currently functional using Netlify.</p>

                <h2>IELC Website</h2>
                <p>Website of a nonprofit located in Davis and was created by a team of fullstack developers in ~10 weeks.</p>

                <h2>Age Predictor</h2>
                <p>Created in under two hours, this simple JavaScript application calls upon an API to gather an age prediction based on your name.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  