import React from "react";
import "./style.css";

function About() {
    return (
        <div className="card mb-3" id="body">
            <div className="row g-0" id="sections">
                <div className="col-md-4">
                    <img src={require('../../../assets/images/headshot.png')} className="img-fluid rounded-start" alt="Profile" id="profile"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body" id="message">
                        <h5 className="card-title">ABOUT ME</h5>
                        <p className="card-text">I'm a computer scientist with a background in software development, Andriod Development,
                            and Machine Learning. I am proficient in data cleaning and Java applications (SE). As a trainee Front-End Development,
                            I'm proficient enough in developing high-quality web applications using HTML5, CSS 3 and some frameworks such as Node.js and React.</p>
                        <p className="card-text"> I obtained a Master Degree in Computational intelligence from University of Kent and
                            Bacholer of science in Computer science from Imo state University, Owerri, Nigeria. My interest in computing started
                            from Microsft Packages which made me gain interest and decide to pursue a career in Computing, i have come across different
                            programming languages during my studies and self learning</p>

                        <p className="card-text"> Below are the technolgies that i have worked with: </p>

                        <ul className="skill">
                            <li className="skill-item">HTML</li>
                            <li className="skill-item">CSS</li>
                            <li className="skill-item">MYSQL</li>
                            <li className="skill-item">JAVA</li>
                            <li className="skill-item">R</li>
                            <li className="skill-item">REACT.JS</li>
                            <li className="skill-item">NODE.JS</li>
                            <li className="skill-item">JAVASCRIPT (ES6+)</li>
                            <li className="skill-item">PHYTHON</li>
                            <li className="skill-item">HASKELL</li>
                            <li className="skill-item">PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;
