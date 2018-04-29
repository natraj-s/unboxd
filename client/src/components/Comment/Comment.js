import React from "react";
import "./Comment.css";

const Comment = props => (
    <div className="col-md-11 singleComment">
        <div className="commentHeader">
            <div className="userlabel">
                <label className="username">{props.username}</label> says:
                {props.parentId !== "0" ? 
                <p className="inreplyto">
                    IN REPLY TO #{props.parentId}
                </p>
                : ""}
            </div>
            <div className="commentBody">
                {props.parentId !== "0" ?                 
                <div className="replyQuote">
                    <p className="replyQHeader">
                        <label className="replyQUser">{props.parentObj.userName}</label> said:
                    </p>
                    <p className="replyQBody">
                        {props.parentObj.comment}
                    </p>
                </div> : ""}
                {props.commentBody}
            </div>
            <div className="commentfooter">
                <span className="oi oi-chat" onClick={() => props.replyHandler(props.id)}>
                 </span> #{props.id}
         </div>
        </div>
    </div>
);

export default Comment;

