import React from 'react';

import AsteroidsPic from './imgs/asteroids.png';
import AsteroidsGame from './imgs/asteroids-game.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Asteroids() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={AsteroidsPic} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>Asteroids!</h3>
                <div className="proj-tags">
                    <p>JAVA</p>
                    <p>APCS</p>
                    <p>GAME DESIGN</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>October 2018 - December 2018</p>
            </div>
            <div className="proj-about-sec">
                <h2>Tech Stack</h2>
                <p>Java</p>
                <p>Javascript</p>
            </div>
            <div className="proj-about-sec">
                <h2>Links</h2>
                <div className="proj-about-icon">
                    <a href="https://github.com/brenleung/AsteroidsGame" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="proj-about-icon"/></a>
                    <a href="https://brenleung.github.io/AsteroidsGame/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGamepad} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
            <h2>Background Info</h2>
            <p>I created this program as a project in my AP Computer Science A class. In this class, we would often be given incomplete programs in Java and would be required to finish them however we desired. This meant that game/project mechanics, design, and interactions could be decided by us. It was one of the reasons I really liked this class and really liked coding, as having an AP class that gave us this much freedom was something I really enjoyed.</p>
            <p>For this project, we created an asteroids game! The main idea of the game is that you are controlling a spaceship and have to avoid asteroids.In addition, there is a scoring and lives system, meaning that players could gain score or lose lives, if hit by one of the asteroids.</p>
            <p>In order to score, the player would have to press the spacebar on the keyboard to shoot bullets and would be rewarded upon destroying an asteroid. The goal was to get the highest score possible.</p>
            <img src={AsteroidsGame}></img>
            <p className="caption">A screen grab of the game in action!</p>
        </div>
        <div className="proj-sec">
            <h2>What Did I Contribute?</h2>
            <p>The design of the spaceship and the asteroids were designed entirely by me. In addition, functions and classes were added that were relevant to this program, which include but are not limited to the movement of the spaceship, the creation, destruction, and movement of asteroids, and the end game screen.</p>
            <p>One of the main focuses of this program was learning how to use abstract classes and learning the function of inheritance between classes.</p>
        </div>
        <div className="proj-sec">
            <h2>Conclusion</h2>
            <p>Even though this project was created over four years ago, it remains close to my heart because it was one of my favorite projects from that class. In moments where it’s hard to stay motivated by computer science, it’s good to remember the times where I enjoyed coding. In addition, I always love looking back at simpler projects and seeing how I’ve grown as a developer since!</p>
        </div>
    </div>
  );
}

export default Asteroids;
