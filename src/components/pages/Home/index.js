import React from "react";
import "./style.css";
import HeadShot from "./image/headshot.png";

function Home() {
    return (
        <div className="card mb-3" id="body">
            <div className="row g-0">
                <div className="col-md-10">
                    <div className="card-body" id="message">
                        <h5 className="card-title">WELCOME</h5>
                        <p className="card-text">lshgsajhsgagsa  I'm a computer scientist that has interest in different fields, but most especially in Artificial
                            Intelligence and Machine Learning. I'm currently sharpening my skills as a Front-End Developer and mastering the act of
                            visualization as a Data Analyst. I obtained a Master Degree in Computational intelligence from University of Kent and
                            Bacholer of science in Computer science from Imo state University, Owerri, Nigeria. My interest in computing started
                            from Microsft Packages which made me gain interest and decide to pursue a career in Computing, i have come across different
                            programming languages during my studies and self learning, the languages are not limited to the following; JAVA, HTML, CSS,
                            C++, haskell, PHP, JavaScript, R, and python e.t.c This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <img src={HeadShot} className="img-fluid rounded-start" alt="headshot"></img>
                </div>
            </div>
        </div>

    );

}


export default Home;