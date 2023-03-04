import React from "react";
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home" onClick={() => props.handlePageChange("Home")}>
                    <image src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" ></image>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/project"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Project
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/projectgallery"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Project Gallery
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            
                               <a href="/Resume.pdf" download>Resume</a>
                                
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;