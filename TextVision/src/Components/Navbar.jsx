import React from 'react';

export default function Navbar(props) {
    return (
        <>
            <nav
                id="navbar-css"
                className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === "light" ? "light" : "dark"}`}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        TextVision
                    </a>

                    {/* Toggler button for small screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible content */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        {/* Theme Switcher */}
                        <div
                            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
                                }`}
                            id="theme-changer"
                        >
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                            >
                                Enable {props.mode === "light" ? "Dark" : "Light"} Mode
                            </label>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={props.toggleMode}
                                id="flexSwitchCheckDefault"
                                role="switch"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
