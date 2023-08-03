import React from 'react';
import './Home.css';
import personal_photo from './imgs/photo.png'

function Home() {
    return (
      <div className="home-col">
        <div className="img">
            <img src={personal_photo}></img>
        </div>
        <div className="text">
            <h3>Hi! 👋 My name is Brendan.</h3>
            <p>I'm an incoming fourth year computer science student at UC Davis specializing in <span className="hover">frontend development</span>, <span className="hover">fullstack development</span>, and <span className="hover">education</span>.</p>
            <p>This site is a work in progress. Tune back in the future for more updates!</p>
            <p>For now.. check out my <a href="https://github.com/brenleung" target="_blank">GitHub</a>, <a href="https://linkedin.com/in/brenleung" target="_blank">LinkedIn</a>, or to contact me directly, <a href="mailto:brendansleung@gmail.com">email me!</a></p>
            <h2>Learn More About Me ⇒</h2>
        </div>
      </div>
    );
  }
  
  export default Home;
  