import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) =>
    <div className="container headerCont">
        <div className="container-fluid">
            {/* {console.log(props)} */}
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-1 logoContainer">
                    <p id="logo">
                        <Link to={"/"}>
                            unBox'd
                    </Link>
                    </p>
                    <p id="subtext">
                        <Link to={"/"}>
                            A NEW FRONTPAGE
                    </Link>
                    </p>

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