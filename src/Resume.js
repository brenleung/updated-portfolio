import React, { useState } from 'react';
import './Resume.css';
import ResumePDF from '../src/imgs/resume.pdf';

import ResumeBox from './components/resumebox';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";

function Resume() {
    const [currentSec, setCurrentSec] = useState(1);  // by default, showing work experience

    const handleArrowClick = (dir) => {  // clickable to show different parts of resume
        if (dir === "left" && currentSec > 1) {
            setCurrentSec(currentSec - 1);
        }
        else if (dir === "right" && currentSec < 3) {
            setCurrentSec(currentSec + 1);
        }
    }

    const secTitles = ["WORK EXPERIENCE", "EDUCATION", "AWARDS"];  // titles for h3

    return (
        <div className="resume drop-in">
            <div className="top-bar">
                <div className="title-sec">
                    <h3>{secTitles[currentSec-1]}</h3>
                    <p><a href={ResumePDF} target="_blank" rel="noreferrer">PDF Version  <FontAwesomeIcon icon={faExternalLink} size="l" /></a></p>
                </div>
                <div className="arrows">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className={`arrow-icon ${currentSec === 1 ? 'disabled' : ''}`} onClick={() => handleArrowClick('left')}/>
                    <p>{`${currentSec}`}/3</p>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className={`arrow-icon ${currentSec === 3 ? 'disabled' : ''}`} onClick={() => handleArrowClick('right')}/>
                </div>
            </div>

            <hr></hr>

            {currentSec === 1 && (
                <>
                <ResumeBox year={"January 2024 - Present"} title={"Software Engineer Intern"} company={"UC Davis Computer Science Department, Davis"} desc={"Collaborated on a cross-functional team towards the completion of BeaGL, a glucose prediction application led by professor Sam King, along with 4 other UC Davis student developers and designers towards a UC Davis diabetes study. Engineered onboarding pages and self-updating glucose prediction charts using React Native and complementary frameworks, which communicate effectively with backend APIs. Participated in weekly team sprints, utilizing frequent communication regarding user research, iteration, and debugging"}/>
                <hr></hr>
                <ResumeBox year={"September 2023 - Present"} title={"Teaching Assistant Intern"} company={"North Davis Elementary, Davis"} desc={"Participated in and facilitated small group activities with 4-8 students in English, fitness, math, and art. Aided in activities with students who required one-on-one aid, including billingual/multilingual students."}/>
                <hr></hr>
                <ResumeBox year={"September 2021 - Present"} title={"Computer Room Media & Technology Consultant"} company={"Information and Educational Technology, Davis"} desc={"Provided hardware and software assistance to the 20000+ UC Davis staff and student that visit the computer lab annually. Guided UC Davis instructors in setting up software and during class times to ensure classes go smoothly. Won Student Employee of the Quarter in March 2023."}/>
                <hr></hr>
                <ResumeBox year={"March 2023 - June 2023"} title={"Computer Science Instructor"} company={"WhizKidz Computer Center, Remote"} desc={"Conducted small-group, weekly classes on introductory computer science concepts in Java, Python, and more. Designed and created weekly supplementary lesson material using coding examples and slide decks."}/>
                <hr></hr>
                <ResumeBox year={"August 2022 - September 2023"} title={"Extended Care Assistant"} company={"Zion Lutheran School, San Francisco"} desc={"Supervised 40+ children who are enrolled in daily extended care program. Assisted children with homework needs and managed emotional needs and conflicts as need be."}/>
                <hr></hr>
                <ResumeBox year={"May 2023 - August 2023"} title={"Technology Assistant Instructor"} company={"TechKnowHow Franchises, San Francisco"} desc={"Assisted in facilitating lessons on introductory game design using Minecraft, LEGO, and robotics for groups of 15-20 elementary students."}/>
                <hr></hr>
                <ResumeBox year={"January 2023 - April 2023"} title={"Frontend Developer"} company={"#include at Davis"} desc={"Developed an agile website in the span of 10 weeks with a small, cross-functional team to create a website for IELC (Interactive Elementary Learning Center), a local Davis tutoring service, to advertise their services more effectively. Programmed website using HTML/CSS, JavaScript, React, Node, and Git."}/>
                <hr></hr>
                <ResumeBox year={"June 2022 - August 2022"} title={"Technology Instructor"} company={"Edventure More, San Francisco"} desc={"Facilitated, structured, and executed daily lesson plans for 20+ elementary-aged children, creating a healthy space for children to learn SEL skills and grow in their knowledge of computer science. Taught children coding and basic game design using Scratch, Minecraft: Education Edition, and Roblox."}/>
                </>
            )}

            {currentSec === 2 && (
                <>
                <ResumeBox year={"2020-2024"} title={"University of California, Davis"} company={"B.S. in Computer Science"} desc={"Current GPA of 3.74. Made Dean's List in Winter 2021 and Spring 2023."}/>
                <hr></hr>
                <ResumeBox year={"2016-2020"} title={"Lowell High School"} company={"High School Degree, San Francisco"} desc={"Participated in Archery Club and Spanish Club. Awarded AP Scholar with Distinction in January 2020."}/>
                </>
            )}

            {currentSec === 3 && (
                <>
                <ResumeBox year={"March 2021, June 2023"} title={"Dean's Honor List"} company={"University of California, Davis"} desc={"The quarterly Dean's Honors List includes names of students who have completed, for a letter grade, a minimum of 12 units in a specific quarter with a grade point average equal to or higher than the minimum grade point average attained by the upper 16% of those registered in the same class level and college during that quarter."}/>
                <hr></hr>
                <ResumeBox year={"May 2023"} title={"Best Hack for Social Good"} company={"HackDavis 2023"} desc={"Awarded to the team who creates the best project in 24 hours for social good. Our project was GluChart, which is an app that uses a machine-learning model hosted by Microsoft Azure to determine future blood sugar levels for those with diabetes based on glucose, insulin, or carbohydrate inputs."}/>
                <hr></hr>
                <ResumeBox year={"May 2023"} title={"Best Healthcare Hack"} company={"HackDavis 2023"} desc={"Awarded to the team who creates one of the top projects that addresses a specific barrier in medicine."}/>
                <hr></hr>
                <ResumeBox year={"March 2023"} title={"Student Employee of the Quarter"} company={"Information and Educational Technology, Davis"} desc={"Awarded to the employee in the computer lab who displays the best overall performance throughout the quarter, which includes communication, helpfulness regarding lab problems, displaying excellent work and effort, and completing projects that improves the lab group overall."}/>
                <hr></hr>
                <ResumeBox year={"January 2020"} title={"AP Scholar with Distinction"} company={"The College Board"} desc={"Granted to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams."}/>
                </>
            )}
            
            <hr></hr>
        </div>
    );
}

export default Resume;