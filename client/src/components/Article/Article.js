import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Article.css";
import API from "../../utils/API";
import Methods from "../../utils/Methods";
import CommentsNum from "../CommentsNum";
import ClicksNum from "../ClicksNum";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        clicks: 0,
        commentsNum: 0,
        liked: false,
        hidden: false
    }

    componentDidMount = () => {
        this.isLiked();
    }

    incrementClicks = () => {
        console.log(this.props.category);
        API.getClicks(this.props.id).then(res => {
            console.log("got clicks ", res.data.clicks);
            let tempClicks = parseInt(res.data.clicks, 10) + 1;
            this.setState({ clicks: tempClicks });
            API.updateClicks(this.props.title, tempClicks).then(res => {
                this.props.handlePageChange(this.props.currentPage);
                console.log("test");
            });
        })
    }

    storeClicksData = () => {
        // let data = JSON.parse(localStorage.getItem(this.props.category));

        // data.forEach(element => {
        //     if (element.title === this.props.title) {


        //     }
        // });

        // localStorage.setItem(this.props.category, JSON.stringify(data));
        // localStorage.setItem(this.props.category + "Aged", JSON.stringify(data.sort(Methods.ageSort)));
        // localStorage.setItem(this.props.category + "Trending", JSON.stringify(data.sort(Methods.clickSort)));
    }

    hideThis = () => {
        this.state.hidden ? this.setState({ hidden: false }) : this.setState({ hidden: true });
        // console.log("this")        ;
    }

    updateLikes = () => {
        let user = localStorage.getItem("__u");
        let likes = localStorage.getItem("__uLikes");
        let articleId = this.props.id;

        let userLikes = {
            userName: user,
            articleId: articleId
        }

        // check if user hasn't already liked this article
        // and only then add it to the database
        if (likes.indexOf(articleId) === -1) {
            console.log("here");
            this.setState({ liked: true });
            API.updateLikes(userLikes)
                .then(res => {
                    likes = likes.slice(0, -1);
                    let articleObj = {
                        "articleId": '' + articleId + ''
                    }
                    if (likes.length > 2) {
                        likes += ",";
                    }
                    likes += JSON.stringify(articleObj) + "]";
                    localStorage.setItem("__uLikes", likes);
                });
        }
        else {
            this.setState({ liked: false });
            let fullStr = '{"articleId":"' + articleId + '"}';
            console.log("likes ", likes);
            console.log("fullstr ", fullStr);

            if (likes.indexOf(fullStr) !== 1) {
                fullStr = "," + fullStr;
                console.log("fullstr not first ", fullStr);
            }
            else {
                if (likes.length !== fullStr.length + 2) {
                    fullStr = fullStr + ",";
                }
                console.log("fullstr first ", fullStr);
            }
            likes = likes.replace(fullStr, "");
            console.log(likes);
            localStorage.setItem("__uLikes", likes);

            API.unlikeFromUser(user, articleId);
        }

        // need to update localstorage as well
    }

    isLiked = () => {
        let temp = localStorage.getItem("__uLikes");
        if (temp != null && temp.indexOf(this.props.id) !== -1) {
            this.setState({ liked: true })
        }
        API.getClicks(this.props.id).then(res => {
            this.setState({
                clicks: res.data.clicks
            })
        });
        API.getNumComments(this.props.id).then(res => {
            this.setState({
                commentsNum: res.data
            })
        })
    }

    render() {
        return (
            <div className="col-md-12">
                <div className={this.props.category === "Entertainment" ? "article entertainment" :
                    this.props.category === "Sports" ? "article sports" :
                        this.props.category === "Science" ? "article science" :
                            this.props.category === "Health" ? "article health" :
                                this.props.category === "Tech" ? "article tech" :
                                    this.props.category === "VideoGames" ? "article videogames" :
                                        this.props.category === "Business" ? "article business" :
                                            "article all"}>
                    <div className={this.props.look === "" ? "artHeader light" : "artHeader dark"}>
                        <div className="title" title={this.props.title}>
                            <div className="image" style={{ backgroundImage: `url(${this.props.img})` }} title={this.props.title}>
                            </div>
                            <p className="artTitle"><a onClick={this.props.page === "mainpage" ?
                                this.incrementClicks : null} href={this.props.url} target="_blank" rel="noopener">{this.props.title}</a></p>
                        </div>
                        <div className="source">
                            <ul className="nav">
                                <li className="nav-item sourceName">
                                    {this.props.source}
                                </li>
                                <li className="nav-item">
                                    {/* {new Date(this.props.publAt).toLocaleDateString('en-EN', { hour: '2-digit', minute: '2-digit', weekday: 'short', year: '2-digit', month: 'long', day: 'numeric' })} */}
                                    {new Date(this.props.publAt).toLocaleDateString('en-EN', { hour: '2-digit', minute: '2-digit', weekday: 'short', month: 'long', day: 'numeric' })}
                                </li>
                                <ClicksNum page={this.props.page} clicks={this.state.clicks} />
                                <CommentsNum id={this.props.id} comments={this.state.commentsNum} />
                                <li className="nav-item">
                                    <span className={!localStorage.getItem("__u") ?
                                        "oi oi-thumb-up hidden" :
                                        this.state.liked ? "oi oi-thumb-up liked" :
                                            "oi oi-thumb-up"} onClick={this.updateLikes}>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="artBody" title="Read comments on this post">
                        <p className={this.state.hidden ? "hidden" : "artDescr"}>
                            <Link to={"/post/" + this.props.id} params={{ id: this.props.id }}>
                                {(this.props.descr === null || this.props.descr === "") ? "No description available" : this.props.descr}
                            </Link>
                        </p>

                        <div className="misc" title="Collapse">
                            <span onClick={this.hideThis}
                                className={this.state.hidden ? "oi oi-chevron-bottom" : "oi oi-chevron-top"}>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Article;