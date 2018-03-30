import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="container">
        <div className="container-fluid catbar">
            <ul className="nav justify-content-center nav-tabs">
                {/* { console.log(props) } */}
                <li onClick={() => props.handlePageChange("Breaking")}
                    className="nav-item">
                    <a className={props.currentPage === "Breaking" ? "nav-link active" : "nav-link"}>Breaking</a>
                </li>
                <li onClick={() => props.handlePageChange("Trending")}
                    className="nav-item">
                    <a className={props.currentPage === "Trending" ? "nav-link active" : "nav-link"}>Trending</a>
                </li>
                <li onClick={() => props.handlePageChange("Aged")}
                    className="nav-item">
                    <a className={props.currentPage === "Aged" ? "nav-link active" : "nav-link"}>Aged</a>
                </li>
            </ul>
        </div>
    </div>
);

export default Navbar;

