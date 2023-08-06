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
                <h3>Here are some of my favorite projects:</h3>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  