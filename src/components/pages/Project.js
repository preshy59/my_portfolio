import React from "react";

const Project = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={props.images} className="card-img-top" alt={props.name}></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.github} class="card-link">GitHub link</a>
            <a href={props.deployedUrl} class="card-link">Deployed link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
