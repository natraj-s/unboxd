import React from "react";
import "./Logo.css";

const Logo = () =>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                Login/Sign Up
            </div>
            <div className="col-md-6">
                <div className="container-fluid">
                    <p id="logo">unBox'd </p>
                    {/* <hr /> */}
                </div>
            </div>
            <div className="col-md-3">
                Logout
            </div>
        </div>
    </div>
    ;

export default Logo;