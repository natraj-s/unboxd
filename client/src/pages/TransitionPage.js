import React from "react";
import "./Login.css";

class TransitionPage extends React.Component {

    moveOn = () => {
        setTimeout(() => {
            this.props.history.push("/")
        }, 3000);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="loginLoader">
                    <hr />
                        <p className="loginMsg">
                            SUCCESSFULLY LOGGED IN
                    </p>
                        <p className="loadingMsg">
                            SENDING YOU BACK TO THE MAIN PAGE
                    </p>
                        <hr />
                        {this.moveOn()}
                    </div>
                </div>
            </div>
        );
    }
}

export default TransitionPage;