import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class ClicksNum extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={this.props.page === "userpage" ? "hidden" : ""}>
                <label id="clickslabel">CLICKS: </label> {this.props.clicks}
            </span>
        );
    }
}

export default ClicksNum;