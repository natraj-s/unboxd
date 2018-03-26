import React from "react";
import "./Logo.css";

const Logo = () =>
    <div className="container headerCont">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-1 logoContainer">
                    <p id="logo">unBox'd </p>
                    <p id="subtext">A NEW FRONTPAGE </p>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-1 loginContainer">
                    <button type="button" className="btn btn-dark">LOGIN/SIGN UP</button>
                </div>
                {/* <hr /> */}

            </div>
        </div>
    </div>
    ;

export default Logo;