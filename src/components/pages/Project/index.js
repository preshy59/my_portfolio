import React from "react";
import "./style.css";
import Projects from "./../../../project.json";

const Project = ({index}) => {
  return (

    <div className="card wrapper" >
      <img src={Projects[index].images} classNameName="card-img-top" alt={Projects[index].name}></img>
      <div classNameName="card-body">
        <h5 classNameName="card-title">{Projects[index].name}</h5>
        <p classNameName="card-text">{Projects[index].description}</p>
        <a href={Projects[index].github} className="card-link">GitHub link</a>
        <a href={Projects[index].deployedUrl} className="card-link">Deployed link</a>
      </div>
    </div>


  );
}

export default Project;
