import React from "react";
import "./style.css";


function Home() {
    return (
        <div className="card mb-3" id="body">
            <div className="row g-0">
                <div className="col-md-10">
                    <div className="card-body" id="message">
                        <h2 className="card-title">HI !!!, my name is</h2>
                        <h3 className="card-title"> Ebele Preious Okemba</h3>
                        <p className="card-text"> I'm a Front-End Developer that has interest in different fields, but most especially in Artificial
                            Intelligence and Machine Learning. I'm currently sharpening my skills as a Front-End Developer and mastering the act of
                            visualization as a Data Analyst.Currently based in London and open for freelance and collaborations. </p>
                    </div>
                </div>
                <div className="col-md-2">
                    <img src= {require('../../../assets/images/headshot.png')} className="img-fluid rounded-start" alt="headshot"></img>
                </div>
            </div>
        </div>

    );

}


export default Home;