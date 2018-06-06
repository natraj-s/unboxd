import React, { Component } from "react";
import "./CommentsNum.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class CommentsNum extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        commentsNum: 0
    }

    setComments = (articleId) => {
        API.getNumComments(articleId).then(res => {
            this.setState({
                commentsNum: res.data
            })
        })
    }

    componentDidMount() {
        // console.log("I mounted");
        this.setComments(this.props.id);
    }

    // componentWillReceiveProps(nextState) {
    //     let nextComments = parseInt(nextState.comments, 10);
    //     // console.log(nextState);
    //     // console.log("current comments " + this.state.commentsNum + " for id " + this.props.id);
    //     this.setState({ commentsNum: nextState.comments });               
    // }

    render() {
        return (
            <span>
                <Link to={"/post/" + this.props.id} params={{ id: this.props.id }}>
                    <label id="commentslabel" title="Read comments on this post">COMMENTS: </label> {this.state.commentsNum}
                </Link>
            </span>
        );
    }
}

export default CommentsNum;