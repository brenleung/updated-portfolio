import React from 'react';
import './AboutMe.css';

import { Link } from 'react-router-dom';
import young_me from './imgs/young-me.png';
import scratch from './imgs/scratch.png';
import scratch_project from './imgs/scratch-project.png';

function AboutMe() {
    const italicStyle = {
        fontStyle: 'italic',
        fontWeight: 'normal',
    };
    
    return (
        <div>
        <div className="intro">
            <div className="intro-img">
                <img src={young_me} alt="me"></img>
                <img src={scratch_project} alt="scratch project"></img>
            </div>
            <div className="intro-text">
                <div className="overflow-hidden drop-in">
                    <h3>It all started 10 years ago..</h3>
                </div>
                <div className="overflow-hidden drop-in-2">
                    <p>The first game I ever latched onto was <span className="bold green">Minecraft</span>. Like many kids, this game was the source of all of my fun in my elementary years. I can't take tell you the amount of times I would spend 8-10 hours of my weekend playing this game with my friends. As entranced by gaming as I was, my mom decided to sign me up for a game design camp that summer.</p>
                    <p>Thus began my first experience with <span className="bold orange">Scratch</span>, and my love for coding was born. That summer, I worked on games both in and out of the classroom and eventually asked myself the question, <span className="bold">"When can I make games like <span style={italicStyle}>this</span> for a living?"</span></p>
                </div>
                <div className="scratch-out">
                    <img src={scratch} alt="scratch logo"></img>
                    <p>Play my first Scratch game <a href="https://scratch.mit.edu/projects/11507450/embed" target="_blank" rel="noreferrer">here!</a> (Warning: I was a devoted game designer, not a good one.)</p>
                </div>
            </div>
        </div>

        {/* <div className="intro">
            <div className="intro-img">
                <img src={young_me} alt="me"></img>
                <img src={scratch_project} alt="scratch project"></img>
            </div>
            <div className="intro-text">
                <div className="overflow-hidden drop-in">
                    <h3>It all started 10 years ago..</h3>
                </div>
                <div className="overflow-hidden drop-in-2">
                    <p>The first game I ever latched onto was Minecraft. Like many kids, this game was the source of all of my fun in my elementary years, starting in fifth grade. I can't take tell you the amount of times I would spend 8-10 hours of my weekend playing this game with my friends. Since I was so entranced (maybe a little too entranced) by gaming, my mom decided to sign me up for a game design camp that summer.</p>
                    <p>Thus began my first experience with Scratch, and my love for coding was born. That summer, I worked on games both in and out of the classroom and I looked forward to a future where I could one day work as a game designer.</p>
                </div>
                <div className="scratch-out">
                    <img src={scratch} alt="scratch logo"></img>
                    <p>Play my first Scratch game <a href="https://scratch.mit.edu/projects/11507450/embed" target="_blank">here!</a> (Warning: I was a devoted game designer, not a good one.)</p>
                </div>
            </div>
        </div> */}
        </div>
    );
}

export default AboutMe;