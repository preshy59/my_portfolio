import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
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
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        {/* definie a default route that will render the About Component */}
        <Route path="/about" element={<About />} />
        {/* definie a default route that will render the Project Component
        <Route path="/project" element={<Project />} /> */}
        {/* definie a default route that will render the Project Gallery Component */}
        <Route path="/projectgallery" element={<ProjectGallery />} />
        {/* definie a default route that will render the Contact Component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);
}

export default PagesContainer;