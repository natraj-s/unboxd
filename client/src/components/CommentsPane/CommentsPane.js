import React from "react";
import Comment from "../../components/Comment";
import "./CommentsPane.css";

class CommentsPane extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        nothing: true
    }

    findParentObj = (parentId) => {
        if (parentId !== "0") {
            let obj = this.props.comments.find(o => parseInt(o.id, 10) === parseInt(parentId, 10));
            let temp = {
                comment: obj.comment,
                userName: obj.userName,
                createdAt: obj.createdAt
            }

            return temp;
        }
    }

    render() {
        return (
            <div className="col-md-12 commentsSection">
                {this.props.comments === undefined ?
                    <div className="col-md-11 singleComment">
                        <div className="commentBody">
                            NO COMMENTS YET. BE THE FIRST TO POST A COMMENT
                        </div>
                    </div>
                    :
                    this.props.comments.map(elem => (
                        elem.parentId === "0" ?
                            <Comment
                                key={elem.id}
                                id={elem.id}
                                username={elem.userName}
                                commentBody={elem.comment}
                                parentId={elem.parentId}
                                replyHandler={this.props.replyTo}
                            />
                            :
                            <Comment
                                key={elem.id}
                                id={elem.id}
                                username={elem.userName}
                                commentBody={elem.comment}
                                parentId={elem.parentId}
                                parentObj={this.findParentObj(elem.parentId)}
                                replyHandler={this.props.replyTo}
                            />
                    ))
                }
            </div>
        )
    }
};

export default CommentsPane;