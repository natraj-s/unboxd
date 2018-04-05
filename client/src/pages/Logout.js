import React from "react";
class Logout extends React.Component {

    componentDidMount = () => {
        this.destroySession();
    }

    destroySession() {
        localStorage.removeItem("__u");
        localStorage.removeItem("__uLikes");
        // this.props.handleLoginChange(false);
        this.props.history.push("/");
    }

    render() {
        return(
            <div>
                
            </div>
        );
    }
}

export default Logout;