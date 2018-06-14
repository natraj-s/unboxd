import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) =>
    <div className="container headerCont">
        <div className="container-fluid">
            {/* {console.log(props)} */}
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-1 logoContainer">
                    <Link to={"/"}>
                        <p id="logo">unBox'd </p>
                        <p id="subtext">A NEW FRONTPAGE </p>
                    </Link>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-1 loginContainer">
                    <Link to={"/login"}>
                        <button type="button"
                            className={localStorage.getItem("__u") ? "btn btn-dark hidden" : "btn btn-dark"}>
                            LOGIN/SIGN UP
                            </button>
                    </Link>
                    <div className={localStorage.getItem("__u") ? "userNav" : "hidden"}>
                        <div className="greeting">
                            WELCOME <label className="user">{localStorage.getItem("__u")}</label>
                            <hr />
                        </div>
                        <div className="navSection">
                            <p>
                                <Link to={"/userpage"}>
                                    PROFILE PAGE<span className="oi oi-caret-left"></span>
                                </Link>
                            </p>
                            <p>
                                <Link to={"/logout"}>
                                    LOGOUT<span className="oi oi-caret-left"></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}

            </div>
        </div>
    </div>
    ;

export default Logo;