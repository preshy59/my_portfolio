import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Contact from "./pages/Contact";
//import Project from "./pages/Project";
import ProjectGallery from "./pages/ProjectGallery";
import About from "./pages/About"
import Home from "./pages/Home";


function PagesContainer() {
return (
  <Router>
    <div>

      {/* rendering the header to all the pages with the project */}
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes basename = "my_portfolio">
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/my_portfolio/" element={<Home />} />
        {/* definie a default route that will render the About Component */}
        <Route path="/my_portfolio/about" element={<About />} />
        {/* definie a default route that will render the Project Component */}
        {/* <Route path="/my_portfolio/project" element={<Project />} /> */}
        {/* definie a default route that will render the Project Gallery Component */}
        <Route path="/my_portfolio/projectgallery" element={<ProjectGallery />} />
        {/* definie a default route that will render the Contact Component */}
        <Route path="/my_portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);
}

export default PagesContainer;