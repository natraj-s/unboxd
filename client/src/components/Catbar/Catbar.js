import React from "react";
import "./Catbar.css";

const Catbar = props => (
    <div className="container">
        <div className="container-fluid">
            <ul className="nav nav-pills nav-fill">
                <li onClick={() => props.handleCatChange("All")}
                    className="nav-item">
                    <a className={props.currentCat === "All" ? "nav-link active" : "nav-link"}>ALL</a>
                </li>
                <li onClick={() => props.handleCatChange("Entertainment")}
                    className="nav-item">
                    <a className={props.currentCat === "Entertainment" ? "nav-link active" : "nav-link"}>ENTERTAINMENT</a>
                </li>
                <li onClick={() => props.handleCatChange("Sports")}
                    className="nav-item">
                    <a className={props.currentCat === "Sports" ? "nav-link active" : "nav-link"}>SPORTS</a>
                </li>
                <li onClick={() => props.handleCatChange("Science")}
                    className="nav-item">
                    <a className={props.currentCat === "Science" ? "nav-link active" : "nav-link"}>SCIENCE</a>
                </li>
                <li onClick={() => props.handleCatChange("Health")}
                    className="nav-item">
                    <a className={props.currentCat === "Health" ? "nav-link active" : "nav-link"}>HEALTH</a>
                </li>
                <li onClick={() => props.handleCatChange("Tech")}
                    className="nav-item">
                    <a className={props.currentCat === "Tech" ? "nav-link active" : "nav-link"}>TECH</a>
                </li>
                <li onClick={() => props.handleCatChange("VideoGames")}
                    className="nav-item">
                    <a className={props.currentCat === "VideoGames" ? "nav-link active" : "nav-link"}>VIDEO GAMES</a>
                </li>
                <li onClick={() => props.handleCatChange("Business")}
                    className="nav-item">
                    <a className={props.currentCat === "Business" ? "nav-link active" : "nav-link"}>BUSINESS</a>
                </li>
                <li onClick={() => props.handleCatChange("USPolitics")}
                    className="nav-item">
                    <a className={props.currentCat === "USPolitics" ? "nav-link active" : "nav-link"}>US POLITICS</a>
                </li>
                <li onClick={() => props.handleCatChange("WorldPolitics")}
                    className="nav-item">
                    <a className={props.currentCat === "WorldPolitics" ? "nav-link active" : "nav-link"}>WORLD</a>
                </li>
            </ul>
        </div>
    </div>
);

export default Catbar;