import React from "react";
import Project from "../Project";
import "./style.css";
import projects from "./../../../project.json"



function ProjectGallery() {
    return (
       <div className="section">
        <div className="cards-text">
            <h1 className="text-center">PROJECT GALLERY</h1>
            <div className ="projects-cards">
               {projects.map((project, index) => {
               return <Project  key={index} {...project}/>
     } )}
            </div>
        </div>
        </div>
    );
}

export default ProjectGallery;
