import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Post.css";
import LoadingWheel from "../components/LoadingWheel";
import Article from "../components/Article";
import Comment from "../components/Comment";

class Post extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        article: [],
        comment: "",
        comments: [],
        newComments: false,
        replyToComment: false,
        parentComment: 0
    }

    handleComment = event => {
        this.setState({ comment: event.target.value });
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;

        API.getById(id).then(res => {
            this.setState({
                article: res.data[0]
            });
            API.getComments(id).then(res => {
                this.setState({
                    comments: res.data,
                    loading: false
                });
                // console.log(res.data);
            })
        })
    }

    findParentObj = (parentId) => {
        if (parentId !== "0") {
            let obj = this.state.comments.find(o => parseInt(o.id, 10) === parseInt(parentId, 10));
            let temp = {
                comment: obj.comment,
                userName: obj.userName,
                createdAt: obj.createdAt
            }

            return temp;
        }
    }

    postComment = () => {
        if (this.state.ncomment !== "") {
            let commentObj = {
                userName: localStorage.getItem("__u"),
                articleId: this.props.match.params.id,
                comment: this.state.comment,
                parentId: this.state.parentComment
            }

            API.postComment(commentObj).then(res => {
                console.log("from post comment ", res);
                this.setState({
                    comment: "",
                    replyToComment: false
                });
                this.componentDidMount();
            })
        }
    }

    replyTo = (parentComment) => {
        this.setState({
            replyToComment: true,
            parentComment: parentComment
        })
        document.getElementById("commentForm").focus();
    }

    render() {
        return (
            <div className="row">
                <div className="container-fluid">
                    <div className="col-md-12">
                        {this.state.loading ? <LoadingWheel /> :
                            <Article
                                key={this.state.article.id}
                                id={this.state.article.id}
                                title={this.state.article.title}
                                author={this.state.article.author}
                                publAt={this.state.article.publishedAt}
                                source={this.state.article.source}
                                url={this.state.article.url}
                                img={this.state.article.urlToImage}
                                descr={this.state.article.description}
                                look={""}
                                category={this.state.article.category}
                                clicks={this.state.article.clicks}
                                page={"postpage"}
                            />
                        }

                        <div className="row">
                            <div className="container-fluid">
                                <div className={this.state.article.category === "Entertainment" ? "col-md-12 belowPost entertainment" :
                                    this.state.article.category === "Sports" ? "col-md-12 belowPost sports" :
                                        this.state.article.category === "Science" ? "col-md-12 belowPost science" :
                                            this.state.article.category === "Health" ? "col-md-12 belowPost health" :
                                                this.state.article.category === "Tech" ? "col-md-12 belowPost tech" :
                                                    this.state.article.category === "VideoGames" ? "col-md-12 belowPost videogames" :
                                                        this.state.article.category === "Business" ? "col-md-12 belowPost business" :
                                                            "col-md-12 col-sm-12 col-xs-12 belowPost all"}>
                                    <div className="col-md-10">
                                        <div className={!localStorage.getItem("__u") ? "hidden" : "form-group commentForm"}>
                                            <label>
                                                <h5>COMMENTING ON THIS POST AS {localStorage.getItem("__u")}:</h5>
                                            </label>
                                            <p className={this.state.replyToComment ? "replyToComment" : "hidden"}>
                                                REPLYING TO #{this.state.parentComment}:
                                            </p>
                                            <textarea className="form-control" id="commentForm" rows="3" onChange={this.handleComment} value={this.state.comment}></textarea>
                                            <button type="button" className="btn commentSubmit" onClick={this.postComment}>SUBMIT</button>
                                        </div>
                                        <div className={localStorage.getItem("__u") ? "hidden" : ""}>
                                            <label>
                                                <h5>
                                                    <Link to="/login">
                                                        LOGIN OR SIGNUP TO COMMENT
                                                    </Link>
                                                </h5>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 commentsSection">
                                        {this.state.comments === undefined ?
                                            <div className="col-md-11 singleComment">
                                                <div className="commentBody">
                                                    NO COMMENTS YET. BE THE FIRST TO POST A COMMENT
                                                </div>
                                            </div>
                                            :
                                            this.state.comments.map(elem => (
                                                elem.parentId === "0" ?
                                                    <Comment
                                                        key={elem.id}
                                                        id={elem.id}
                                                        username={elem.userName}
                                                        commentBody={elem.comment}
                                                        parentId={elem.parentId}
                                                        replyHandler={this.replyTo}
                                                    />
                                                    :
                                                <Comment
                                                    key={elem.id}
                                                    id={elem.id}
                                                    username={elem.userName}
                                                    commentBody={elem.comment}
                                                    parentId={elem.parentId}
                                                    parentObj={this.findParentObj(elem.parentId)}
                                                    replyHandler={this.replyTo}
                                                />

                                            ))
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

export default Post;