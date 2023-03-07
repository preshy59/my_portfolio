import React from "react";
import Project from "../Project";
import "./style.css";
import project from "./c"



function ProjectGallery() {
    return (
        <div>
            <h1 className="text-center">Project Gallery</h1>
            <div>
               {projects.map((project, index) => {
               return <Project  key={index} {...project}/>
     } )}
            </div>
        </div>
    );
}

export default ProjectGallery;
