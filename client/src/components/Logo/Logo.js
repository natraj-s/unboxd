import React from "react";
import "./Logo.css";

const Logo = () =>
    <div className="container headerCont">
        <div className="row">
            <div className="container-fluid">
                <p id="logo">unBox'd </p>
                {/* <hr /> */}
            </div>
        </div>
        <div className="row login">
            <div className="container-fluid">
                <button type="button" className="btn btn-dark">LOGIN/SIGN UP</button>
            </div>
        </div>
    </div>
    ;

export default Logo;