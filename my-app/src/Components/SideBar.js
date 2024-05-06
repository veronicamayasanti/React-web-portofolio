import React from "react";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <section>
            <div className="sidebar-header">
                <img src="img/profile.jpg" alt="image profile" />
            </div>

        <div className="sidebar-content">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" className="navbar-brand">Navigationn</a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">
                                    Home
                                    <i className="fa fa-home"></i>
                                </Link>
                            </li> 

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                    <i className="fa fa-address-card"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/experience">
                                    Experience
                                    <i className="fa fa-star"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/service">
                                    Service
                                    <i className="fa fa-tasks"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">
                                    Portfolio
                                    <i className="fa fa-file-archive"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                    <i className="fa fa-envelope"></i>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                
        </div>

            <div className="sidebar-footer">
                <Link to="/"><i class="fab fa-twitter"></i></Link>
                <Link to="/"><i class="fab fa-facebook-f"></i></Link>
                <Link to="/"><i class="fab fa-linkedin-in"></i></Link>
            </div>
        </section>
    )
}

export default SideBar;