import React from "react";
import API from "../utils/API";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        loginusername: "",
        loginpwd: "",
        validLogin: false,
        loginMsg: "",
        suusername: "",
        suemail: "",
        supassword: "",
        surptpwd: "",
        suusernameMsg: "",
        suemailMsg: "",
        supwdMsg: "",
        suusernameValid: false,
        suemailValid: false,
        supwdValid: false
    }

    handleLoginUsername = event => {
        this.setState({ loginusername: event.target.value });
    }

    handleLoginPwd = event => {
        this.setState({ loginpwd: event.target.value });
    }

    handleUsername = event => {
        console.log(event.target.value);
        this.setState({ suusername: event.target.value });
    }

    handleEmail = event => {
        this.setState({ suemail: event.target.value });
    }

    handlePassword = event => {
        this.setState({ supassword: event.target.value });

        if (event.target.value !== this.state.surptpwd) {
            console.log("checking in handle as well");
            this.setState({ supwdMsg: "Passwords don't match", supwdValid: false });
        }
    }

    checkUser = () => {
        if (this.state.suusername === "") {
            this.setState({ suusernameMsg: "Username cannot be blank." });
            return false;
        }
        else {
            API.findUser(this.state.suusername)
                .then(res => {
                    if (res.data === null) {
                        this.setState({
                            suusernameMsg: "",
                            suusernameValid: true
                        });
                    }
                    else {
                        this.setState({
                            suusernameMsg: "Username already exists.",
                            suusernameValid: false
                        });
                        return false;
                    }
                });
        }
    }

    checkPassword = event => {
        if (event !== undefined) {
            console.log("heyah");
            this.setState({ surptpwd: event.target.value });

            if (this.state.supassword !== event.target.value) {
                console.log("checking");
                this.setState({ supwdMsg: "Passwords don't match", supwdValid: false });
            }
            else {
                console.log("checked");
                this.setState({
                    supwdMsg: "",
                    supwdValid: true
                });
            }
        }

        if (this.state.supassword === "") {
            this.setState({
                supwdMsg: "Please enter a password",
                supwdValid: false
            });
        }
        else if (this.state.supassword !== "" && this.state.surptpwd === "" && event === undefined) {
            this.setState({
                supwdMsg: "Please repeat the password",
                supwdValid: false
            });
        }
        else {
            console.log("came here");
            return;
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.suusernameValid) { this.checkUser(); }
        if (!this.state.supwdValid) { this.checkPassword(); }
        if (this.state.suusernameValid && this.state.supwdValid) {
            console.log("valid details ");
            var user = {
                username: this.state.suusername,
                email: this.state.suemail,
                password: this.state.supassword
            }

            API.createUser(user)
                .then(res => {
                    console.log("from handlesubmit ", res.data);
                    this.resetState();
                    this.props.history.push("/loggedin");
                });
        }

    }

    handleLogin = event => {
        event.preventDefault();
        if (this.state.loginusername === "") {
            this.setState({ loginMsg: "Please enter a username." });
        }
        else {
            API.findUser(this.state.loginusername)
                .then(res => {
                    if (res.data === null) {
                        console.log("here");
                        this.setState({ loginMsg: "No such username exists" });
                    }
                    else {
                        if(this.state.loginpwd === "") {
                            this.setState({ loginMsg: "Please enter a password" });
                        }
                        else {
                            this.setState({ loginMsg: "" });
                        }
                    }
                });
        }
    }

    resetState = () => {
        this.setState({
            suusername: "",
            suemail: "",
            supassword: "",
            surptpwd: "",
            suusernameMsg: "",
            suemailMsg: "",
            supwdMsg: "",
            suusernameValid: false,
            suemailValid: false,
            supwdValid: false
        });
    }

    render() {
        return (
            <div className="row loginComponent">
                <hr />
                <div className="col-md-6 loginSection">
                    <div className="header">
                        <h4>LOGIN WITH AN EXISTING ACCOUNT</h4>
                    </div>
                    <form className="navbar-form navbar-left login-form" id="loginInfo" onSubmit={this.handleLogin}>
                        <div className="user-form-group">
                            <input id="loginusername" type="text" className="form-control" name="username"
                                value={this.state.loginusername} placeholder="USERNAME"
                                onChange={this.handleLoginUsername} />
                        </div>
                        <div className="pwd-form-group">
                            <input id="loginpassword" type="password" className="form-control" name="password"
                                value={this.state.loginpwd} placeholder="PASSWORD"
                                onChange={this.handleLoginPwd} />
                        </div>
                        <div>
                            <p id="loginerror" className="error">{this.state.loginMsg}</p>
                        </div>
                        <div className="login-footer">
                            <button className="btn btn-primary btn-dark loginSubmit">LOGIN</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-6 signupSection">
                    <div className="header">
                        <h4>SIGN UP FOR AN ACCOUNT</h4>
                    </div>
                    <form className="navbar-form navbar-left login-form" id="signupInfo" onSubmit={this.handleSubmit}>
                        <div className="user-form-group">
                            <input id="suusername" type="text" className="form-control"
                                name="username" value={this.state.suusername} placeholder="USERNAME"
                                onChange={this.handleUsername} />
                            <p className="error">
                                <label id="sunamerr">{this.state.suusernameMsg}</label>
                            </p>
                        </div>
                        <div className="email-form-group">
                            <input id="suemail" type="text" className="form-control"
                                name="email" value={this.state.suemail} placeholder="EMAIL"
                                onChange={this.handleEmail} />
                            <p className="error">
                                <label id="suemailerr">{this.state.suemailMsg}</label>
                            </p>
                        </div>
                        <div className="pwd-form-group">
                            <input id="supwd" type="password" className="form-control"
                                name="password" value={this.state.supassword} placeholder="PASSWORD"
                                onChange={this.handlePassword} />
                        </div>
                        <div className="rptpwd-form-group">
                            <input id="supwdrpt" type="password" className="form-control"
                                value={this.state.surptpwd} placeholder="REPEAT PASSWORD"
                                onChange={this.checkPassword} />
                            <p className="error">
                                <label id="supwdrpterr">{this.state.supwdMsg}</label>
                            </p>
                        </div>
                        <div className="signup-footer">
                            <button className="btn btn-primary btn-dark signupSubmit">SIGNUP</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Login;