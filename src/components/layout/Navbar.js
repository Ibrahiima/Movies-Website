import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme";

export default function Navbar() {
    const counter = useSelector(state => state.counter.counterVal);
    const { theme } = useContext(ThemeContext);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand">
                    Games App
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/">
                            Games
                        </Link>
                        <Link className="nav-link" to="/add-game">
                            Add Game
                        </Link>
                        <Link className="nav-link" to="/settings">
                            Settings
                        </Link>
                        <Link className="nav-link" to="/counter">
                            Counter : {counter}
                        </Link>
                        <span className="nav-link">
                            Theme : {theme}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
