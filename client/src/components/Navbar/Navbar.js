import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="container">
        <div className="container-fluid catbar">
        <div class="card-header">
            <ul className="nav justify-content-center nav-tabs card-header-tabs">
                {/* { console.log(props) } */}
                <li onClick={() => props.handlePageChange("Breaking")}
                    className="nav-item">
                    <a className={props.currentPage === "Breaking" ? "nav-link active" : "nav-link"}>BREAKING</a>
                </li>
                <li onClick={() => props.handlePageChange("Trending")}
                    className="nav-item">
                    <a className={props.currentPage === "Trending" ? "nav-link active" : "nav-link"}>TRENDING</a>
                </li>
                <li onClick={() => props.handlePageChange("Aged")}
                    className="nav-item">
                    <a className={props.currentPage === "Aged" ? "nav-link active" : "nav-link"}>AGED</a>
                </li>
            </ul>
            </div>
        </div>
    </div>
);

export default Navbar;

