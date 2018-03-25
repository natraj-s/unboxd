import React from "react";
import "./Catbar.css";

const Catbar = props => (
    <div className="container">
        <div className="container-fluid">
            <ul className="nav nav-pills nav-fill">
                <li onClick={() => props.handleCatChange("All")}
                    className="nav-item">
                    <a className={props.currentCat === "All" ? "nav-link active" : "nav-link"} href="#">All</a>
                </li>
                <li onClick={() => props.handleCatChange("Entertainment")}
                    className="nav-item">
                    <a className={props.currentCat === "Entertainment" ? "nav-link active" : "nav-link"} href="#">Entertainment</a>
                </li>
                <li onClick={() => props.handleCatChange("Sports")}
                    className="nav-item">
                    <a className={props.currentCat === "Sports" ? "nav-link active" : "nav-link"} href="#">Sports</a>
                </li>
                <li onClick={() => props.handleCatChange("Science")}
                    className="nav-item">
                    <a className={props.currentCat === "Science" ? "nav-link active" : "nav-link"} href="#">Science</a>
                </li>
                <li onClick={() => props.handleCatChange("Tech")}
                    className="nav-item">
                    <a className={props.currentCat === "Tech" ? "nav-link active" : "nav-link"} href="#">Tech</a>
                </li>
                <li onClick={() => props.handleCatChange("VideoGames")}
                    className="nav-item">
                    <a className={props.currentCat === "VideoGames" ? "nav-link active" : "nav-link"} href="#">Video Games</a>
                </li>
                <li onClick={() => props.handleCatChange("USPolitics")}
                    className="nav-item">
                    <a className={props.currentCat === "USPolitics" ? "nav-link active" : "nav-link"} href="#">US Politics</a>
                </li>
                <li onClick={() => props.handleCatChange("WorldPolitics")}
                    className="nav-item">
                    <a className={props.currentCat === "WorldPolitics" ? "nav-link active" : "nav-link"} href="#">World Politics</a>
                </li>
            </ul>
        </div>
    </div>
);

export default Catbar;