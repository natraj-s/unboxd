import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Post.css";
import LoadingWheel from "../components/LoadingWheel";
import Article from "../components/Article";
import Comment from "../components/Comment";
import CommentsPane from "../components/CommentsPane";
import Methods from "../utils/Methods";

class Post extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        article: [],
        comment: "",
        comments: [],
        newComments: true,
        replyToComment: false,
        parentComment: 0
    }

    handleComment = event => {
        this.setState({ 
            comment: event.target.value 
        });
    }

    resetNewCommentsState = () => {
        this.setState({
            newComments: false
        });
    }

    getComments = (id) => {
        API.getComments(id).then(res => {
            this.setState({
                comments: res.data,
                loading: false,
                newComments: false
            });
        })
    }

    getAndUpdateCommentsNum = (id) => {
        API.getNumComments(id).then(res => {
            let commentsNum =  res.data;
            this.updateCommentsNum(commentsNum);
        })
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;

        API.getById(id).then(res => {
            this.setState({
                article: res.data[0]
            });
            this.getComments(id);
        })
    } 

    postComment = () => {
        if (this.state.comment !== "") {
            let articleId = this.props.match.params.id;

            let commentObj = {
                userName: localStorage.getItem("__u"),
                articleId: articleId,
                comment: this.state.comment,
                parentId: this.state.parentComment
            }

            API.postComment(commentObj).then(res => {
                // console.log("from post comment ", res);
                this.getComments(articleId);
                this.getAndUpdateCommentsNum(articleId);                
                this.setState({
                    comment: "",
                    replyToComment: false,
                    newComments: true
                });
            })
        }
    }

    updateCommentsNum = (commentsNum) => {
        let articleId = this.props.match.params.id;

        let articleCopy = Object.assign({}, this.state.article);
        articleCopy.comments = commentsNum;
        this.setState({ article : articleCopy });

        API.updateComments(articleId, articleCopy.comments).then(res => {
            // localStorage.setItem(this.props.category, JSON.stringify(res.data));
            // localStorage.setItem(this.props.category + "Aged", JSON.stringify(res.data.sort(Methods.ageSort)));
            // localStorage.setItem(this.props.category + "Trending", JSON.stringify(res.data.sort(Methods.clickSort)));
            this.forceUpdate();
        });
        
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
                            comments={this.state.article.comments}
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
                                            <textarea className="form-control" id="commentForm" rows="3" 
                                            onChange={this.handleComment} 
                                            value={this.state.comment}
                                            onClick={this.resetNewCommentsState}>
                                            </textarea>
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
                                    <CommentsPane comments={this.state.comments} replyTo={this.replyTo} />
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