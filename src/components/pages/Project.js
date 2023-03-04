import React from "react";

const Project = ({ name, description, github, deployedUrl, screenshot }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <image src={screenshot} className="card-img-top" alt="ScreenShot of the Project"></image>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href={github} class="card-link">GitHub link</a>
            <a href={deployedUrl} class="card-link">Deployed link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
