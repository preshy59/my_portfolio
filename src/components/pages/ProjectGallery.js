import React from "react";
import Project from "./Project";


const projects = [
    {
        id: 1,
        name: "Better Nutrient",
        images: " ",
        description: "Better nutrient is a single web application that only the user to view the basic nutrient and recipe for any food of choice. ",
        github: "https://github.com/preshy59/better_nutrient",
        deployedUrl: "https://preshy59.github.io/better_nutrient/"
    },

    {
        id: 2,
        name: "5Days Weather Forcast",
        images: " ",
        description: "The 5Days Weather Forcast Dashboard is a user friendly single page web application that showcases the 5days- weather forecast of a city which is soley based on the user choice. ",
        github: "https://github.com/preshy59/weather_dashboard",
        deployedUrl: "https://preshy59.github.io/weather_dashboard/"
    },

    {
        id: 3,
        name: "Team Profile",
        images: " ",
        description: "Team Profile is a command-line application that take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person and combine the information to generate the team profiles using node.js ",
        github: "https://github.com/preshy59/team_profile_generator",
        deployedUrl: "https://github.com/preshy59/team_profile_generator"
    },

    {
        id: 4,
        name: "Prebel Collection",
        images: " ",
        description: "Online fashion store that deals on different apparels",
        github: "https://github.com/preshy59/prebel_collection",
        deployedUrl: "https://preshy59.github.io/prebel_collection/"
    },

    {
        id: 5,
        name: "Day Planner",
        images: " ",
        description: "Day Planner is a project design that implement enforces the implementation of day to day activity management. ",
        github: "https://github.com/preshy59/day-planner",
        deployedUrl: "https://preshy59.github.io/day-planner/"
    }

]

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
