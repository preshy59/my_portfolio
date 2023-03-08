import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
            <a className="navbar-brand images navHead" href="/my_portfolio" onClick={() => props.handlePageChange("Home")}>
                <img src={require('../../assets/images/logo.png')} alt="logo using initial" id="logo"></img>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            to="/my_portfolio/"
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
                            to="/my_portfolio/about"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                            <NavLink
                                to="/project"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Project
                            </NavLink>
                        </li> */}

                    <li className="nav-item">
                        <NavLink
                            to="/my_portfolio/projectgallery"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Project Gallery
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/my_portfolio/contact"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>
                <div className="resume">
                    <a href="/Resume.pdf" download>Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;