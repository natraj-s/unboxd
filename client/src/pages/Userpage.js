import React from "react";
import API from "../utils/API";
import "./Login.css";

class Userpage extends React.Component {

    moveOn = () => {
        setTimeout(() => {
            this.props.history.push("/")
        }, 3000);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    SUCCESSFULLY LOGGED IN
                   {this.moveOn()}
                </div>
            </div>
        );
    }
}

export default Userpage;