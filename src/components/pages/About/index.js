import React from "react";
import "./style.css";

function About() {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require('../../../assets/images/headshot.png')} className="img-fluid rounded-start" alt="Profile picture"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">ABOUT ME</h5>
                        <p className="card-text">I'm a computer scientist that has interest in different fields, but most especially in Artificial
      Intelligence and Machine Learning. I'm currently sharpening my skills as a Front-End Developer and mastering the act of 
      visualization as a Data Analyst. I obtained a Master Degree in Computational intelligence from University of Kent and 
      Bacholer of science in Computer science from Imo state University, Owerri, Nigeria. My interest in computing started
      from Microsft Packages which made me gain interest and decide to pursue a career in Computing, i have come across different
      programming languages during my studies and self learning, the languages are not limited to the following; JAVA, HTML, CSS,
      C++, haskell, PHP, JavaScript, R, and python e.t.c</p>
                    </div>
                </div>
            </div>
        </div>
        //     <div classNameName="progress-section skillSet" id="skills">
        //         <h4 classNameName="heading">My Skills</h4>
        //         <div classNameName="progress stages">
        //             <h4>MYSQL</h4>
        //             <div classNameName="progress-bar bg-warning bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        //         </div>
        //         <div classNameName="progress stages">
        //             <h4>JAVA</h4>
        //             <div classNameName="progress-bar bg-warning bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
        //         </div>
        //         <div classNameName="progress stages">
        //             <h4>EXCEL</h4>
        //             <div classNameName="progress-bar bg-danger bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
        //         </div>
        //         <div classNameName="progress stages" >
        //             <h4>HTML</h4>
        //             <div classNameName="progress-bar bg-success bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        //         </div>
        //         <div classNameName="progress stages">
        //             <h4>CSS</h4>
        //             <div classNameName="progress-bar bg-info bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        //         </div>
        //         <div classNameName="progress stages">
        //             <h4>MACHINE LEARNING</h4>
        //             <div classNameName="progress-bar bg-warning bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        //         </div>
        //         <div classNameName="progress stages">
        //             <h4>JAVASCRIPT</h4>
        //             <div classNameName="progress-bar bg-warning bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default About;
