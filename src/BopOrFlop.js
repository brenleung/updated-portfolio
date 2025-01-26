import React from 'react';

import BopOrFlopPic from './imgs/boporflop.png';
import ConfusionMatrix from './imgs/confusionmatrix.png';
import Frontend from './imgs/boporflopfrontend.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Asteroids() {
  return (
    <div className="proj drop-in">
        <div className="proj-header">
            <img src={BopOrFlopPic} alt="about this proj"></img>
            <div className="proj-header-text">
                <h3>Bop or Flop?</h3>
                <div className="proj-tags">
                    <p>MACHINE LEARNING</p>
                    <p>PYTHON</p>
                    <p>DATA ANALYSIS</p>
                </div>
            </div>
        </div>
        <div className="proj-about">
            <div className="proj-about-sec">
                <h2>Duration</h2>
                <p>September 2023 - December 2023</p>
            </div>
            <div className="proj-about-sec">
                <h2>Tech Stack</h2>
                <p>Python</p>
                <p>Flask</p>
                <p>Kaggle</p>
            </div>
            <div className="proj-about-sec">
                <h2>The Team</h2>
                <p>Brendan Leung</p>
                <p>Xiaolin Ma</p>
                <p>Gun Wutthukal</p>
                <p>Diego Martinez</p>
            </div>
            <div className="proj-about-sec">
                <h2>Links</h2>
                <div className="proj-about-icon">
                    <a href="https://github.com/brenleung/BopOrFlop" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="proj-about-icon"/></a>
                </div>
            </div>
        </div>
        <div className="proj-sec">
            <h2>The Task</h2>
            <p>As part of ECS 171, a machine learning class at UC Davis, the task at hand is to build a machine learning application that builds off of an existing dataset. The problem was left pretty open to interpretation, as it could use any algorithm, along with regression or classification to solve the issue at hand. One exciting part about this project was that none of us were very familiar with machine learning beforehand, so the project left us with a lot of new opportunities to learn.</p>
            <p>After investigating several datasets over the next week, our team decided on a Spotify dataset. It combined a heavy interest from all of us in music and the attributes in the dataset were interesting and provided a lot of detail. Scraped from the Spotify API, attributes such as danceability, energy, speechiness, acousticness and more are used to describe each song on a scale from 0-100. These attributes, along with the main attribute we were interested in being popularity, could be used to best determine our question at hand: is it possible to determine if a song is popular based on its attributes?</p>
        </div>
        <div className="proj-sec">
            <h2>Investigation</h2>
            <p>Before going deep into the creation of our machine learning models, we decided to look further into the dataset, along with past investigations into this topic. After all, it’s impossible for us to be the first ones to ever consider this problem. Over the next week, we looked at countless papers, learning more about how the problem could be solved, the types of conclusions other groups and professionals found, and the best machine learning models that we could implement for our own project. Our idea was to take what was out there on the Internet and improve it, building off of others to create an even better project.</p>
            <p>We also did preprocessing on our models using Python. One main issue at hand was the amount of attributes that the dataset provided. If anything, this would skew our data since there were so many attributes that it would lead to underfitting. We decided to make a pair-plot that would find the relationship between our target variable and other variables at hand. This led to us cleaning the set as best we could to create the most accurate model at hand.</p>
        </div>
        <div className="proj-sec">
            <h2>The Models</h2>
            <p>After more investigation into the project, we decided on three main models. From the papers we had read, the most popular models that we implemented were random forest, Gaussian-Naive Bayes, and K-nearest neighbors.</p>
            <p>The implementation of these models were done between two of us and were quite simple to implement. Although I did not have a lot of experience with Python prior, its libraries were quite simple to implement and use. After the main work of cleaning our dataset was done, creating the actual model took little time.</p>
            <p>After some investigation into our created models, we found that random forests was the best performing model of the three.</p>
            <img src={ConfusionMatrix}></img>
            <p className="caption">The confusion matrix for the random forest model.</p>
        </div>
        <div className="proj-sec">
            <h2>Frontend Conversion</h2>
            <p>Following the evaluation of our best model, it was converted into a pickle which would then be used for the frontend side of our project. I was in charge of completing the frontend, which would involve a conversion to Flask.</p>
            <p>Although I had no prior experience in this, a few searches and tutorials on how to convert from Jupyter Notebook to Flask helped me out immensely. Within just a few hours, I was able to turn the random forest model into a full frontend experience, in which the user could customize each musical attribute and receive an output of popular (bop) or unpopular (flop).</p>
            <img src={Frontend}></img>
            <p className="caption">The frontend implementation for our model.</p>
        </div>
        <div className="proj-sec">
            <h2>Conclusion</h2>
            <p>This project opened my eyes to the world of machine learning. Prior to this project, machine learning, although new and trending upwards, felt intimidating to me, especially given the fact that I knew nothing about it. However, after working at it for a few months, the world of machine learning feels easier to achieve knowing that there are many supported libraries to help through the process.</p>
            <p>For our project, it was great working with like-minded people and being able to communicate effectively to reach our goals. In the end, there are a few improvements we could have on the project, however. To achieve better accuracy, I believe we should have removed more columns from the dataset, especially ones that held the least relevancy to the end variable (popularity). In addition, parameters within the different models could have been adjusted to see which ones would return the best results.</p>
            <p>Overall, however, I am immensely proud of the product we made, especially given that the project was created while juggling many other assignments in the class. And in the end.. we got a 100%!</p>
        </div>
    </div>
  );
}

export default Asteroids;
