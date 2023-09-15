import React from 'react';
import './Gluchart.css';

import GluChart from './imgs/gluchart-2.png';
import GluChartSketch from './imgs/gluchart-first-sketch.png';
import ColorPalette from './imgs/color-palette.jpg';
import ApreeHealth from './imgs/apree-health.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";

function Gluchart() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={GluChart} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>GluChart</h3>
                <div className="proj-tags">
                    <p>REACT.JS</p>
                    <p>TEAM PROJECT</p>
                    <p>AWARD-WINNING</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>May 20 - May 21</p>
            </div>
            <div className="proj-about-sec">
                <h2>Awards Won</h2>
                <p>Best Hack for Social Good</p>
                <p>Best Healthcare Hack</p>
            </div>
            <div className="proj-about-sec">
                <h2>The Team</h2>
                <p>Brendan Leung (frontend)</p>
                <p>Sri Magesh (frontend / design)</p>
                <p>Jun Min Kim (backend)</p>
                <p>Tim Stewart (backend / deployment)</p>
            </div>
            <div className="proj-about-sec">
                <h2>Links</h2>
                <div className="proj-about-icon">
                    <a href="https://github.com/TimStewartJ/gluchart" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="proj-about-icon"/></a>
                    <a href="https://devpost.com/software/gluchart" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDev} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
            <h2>The Challenge</h2>
            <p>HackDavis is an annual hackathon hosted in Davis, CA where participants are given the freedom to code any program they wish within 24 hours, as long as it falls into the general guidelines of “coding for social good.” This can be interpreted in many ways, as there are a myriad of categories that can be won. HackDavis draws in college students from both in Davis and beyond, with over 150 projects being submitted each year. </p>
        </div>
        <div className="proj-sec">
            <h2>Quick and Reliable</h2>
            <p>Going into this hackathon, we wanted to tackle the barrier of healthcare and specifically, diabetes. Diabetes is a chronic condition that causes problems with the production of insulin, a hormone that our body uses to regulate our sugar levels. With little to no insulin being produced in the pancreas, patients with diabetes must regulate their glucose levels by directly injecting insulin.</p>
            <p>For those that have to self-administer insulin, this can be a problem. Users often have to guess how much/what type of insulin to inject before a meal. Putting in too little and the user has to have the inconvenience of injecting again. Putting in too much can bring sugar levels down to a dangerously low level, producing side effects as dangerous as a coma.</p>
            <p>We wanted to create a product that would provide a quick and reliable solution that could show diabetic users how much insulin to inject based on their current sugar levels and the (potential) amount of carbohydrates they were to ingest in their incoming meal. This application would be based on machine learning, being fed data of prior diabetic patients. If successful, this product aimed to vastly improve the quality of life for many diabetic patients who cannot afford automatic insulin injectors. Thus came the name GluChart, allowing users to see their current and future glucose levels on a chart.</p>
            <img src={GluChartSketch} alt="Our first sketch!"></img>
            <p className="caption">The developer's first sketches of the product's vision!</p>
        </div>
        <div className="proj-sec">
            <h2>The Tech Stack</h2>
            <p>Knowing we wanted to create a fullstack application, we were looking for a tech stack that could administer all needs of our product. The machine learning model was hosted by Microsoft Azure. The frontend used React and would rely on API calls to the machine learning model to get results. The backend used Express. All designs for the product were created on Figma.</p>
        </div>
        <div className="proj-sec">
            <h2>The Design</h2>
            <p>We wanted a design that could be used on primarily mobile applications, since the idea was that users would be using this app on-the-go. We focused on a simplistic design that could be easily understood by people of all ages. Even though I was not a main designer on this project, I provided my input of how designs looked and provided feedback as needed.</p>
            <p>One main decision was the color palette of the product. We wanted a color palette that would be easy on the eyes, as we wanted our users to remain calm while using our app. Looking at various websites related to health online, we noticed that these websites often used whites, greens, and blues to symbolize calamity. The last thing we would want to do as a health-related app was induce more stress.</p>
            <img src={ApreeHealth}></img>
            <p className="caption">An example of a website that had the color palette we were envisioning.</p>
        </div>
        <div className="proj-sec">
            <h2>Challenges While Coding</h2>
            <p>Although it wasn't my first time using React, I had little experience with it and I had to overcome small challenges during my time at the hackathon. This was also one of my first large team projects with a time constraint, so I had to adjust to consistently checking in with my team and providing updates as necessary.</p>
            <p>One of the biggest challenges was creating the graph that could self-update after a user inputted carb or glucose levels. This required using useState, a pivotal aspect of React. I had no prior knowledge with this, and to make matters worse, I had the challenge of sharing states between components. This aspect of the project was one of the most challenging because I had already been coding for roughly 10 hours that day and my mind was not ready to take on learning new concepts. However, after much trial and error, watching YouTube tutorials, and consulting my team, we were able to complete the graph. </p>
        </div>
        <div className="proj-sec">
            <h2>The Result</h2>
            <p>After roughly 21 grueling hours, we were able to complete our product! Our app was able to accurately predict glucose levels of a diabetic patient 30 minutes into the future. We focused on allowing users to be able to input carbs, insulin, or their current glucose levels. Although this app is just a prototype, the hope is that it can later be integrated with other apps such as FitBit, Dexcom, or any device that tracks sugar levels on a minute-by-minute basis to allow easier access</p>
            <p>After a 2 hour judging period where we were exhausted having had no sleep, to our surprise, <span className="italics">we won</span>! GluChart was proud to take home first place, taking home the award for Best Hack for Social Good and Best Healthcare Hack.</p>
        </div>
        <div className="proj-sec">
            <h2>What I Learned</h2>
            <p>With this being my first experience in a hackathon, this project gave me a lot of self-confidence in my own abilities as a developer. Never would I have thought I could have created a fullstack application in just 24 hours with myself being one of the lead frontend developers. However, even with my limited experience with React, we were able to create a winning product.</p>
            <p>This project taught me so much about frontend, React, and team collaboration. As they say, nothing beats actual experience and I think that speaks volumes. Without this, I don’t think I would be as far as I am today as a developer and I look forward to working on more team projects like this in the future.</p>
        </div>
    </div>
  );
}

export default Gluchart;
