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
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="projectgallery" element={<ProjectGallery />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);
}

export default PagesContainer;