import React from "react";
import "./style.css";

const Project = (props) => {
  return (

    <div className="card wrapper" >
      <img src={props.images} classNameName="card-img-top" alt={props.name}></img>
      <div classNameName="card-body">
        <h5 classNameName="card-title">{props.name}</h5>
        <p classNameName="card-text">{props.description}</p>
        <a href={props.github} className="card-link">GitHub link</a>
        <a href={props.deployedUrl} className="card-link">Deployed link</a>
      </div>
    </div>


  );
}

export default Project;
