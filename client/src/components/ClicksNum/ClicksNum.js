import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";

class ClicksNum extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={this.props.page === "userpage" ? "hidden" : "nav-item"}>
                <label id="clickslabel">CLICKS: </label> {this.props.clicks}
            </li>
        );
    }
}

export default ClicksNum;