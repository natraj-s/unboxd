import React, { Component } from "react";
import "./Article.css";
import API from "../../utils/API";
import Methods from "../../utils/Methods";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        clicks: this.props.clicks,
        liked: false,
        hidden: false
    }

    incrementClicks = () => {
        this.setState({ clicks: this.state.clicks + 1 })
        this.storeClicksData();
    }

    componentDidMount = () => {
        this.isLiked();
    }

    storeClicksData = () => {
        let data = JSON.parse(localStorage.getItem(this.props.category));

        data.forEach(element => {
            if (element.title === this.props.title) {
                element.clicks = parseInt(element.clicks, 10) + 1;
                this.setState({ clicks: element.clicks });
                API.updateClicks(element.title, element.clicks).then(res => {
                });
            }
        });

        localStorage.setItem(this.props.category, JSON.stringify(data));
        localStorage.setItem(this.props.category + "Aged", JSON.stringify(data.sort(Methods.ageSort)));
        localStorage.setItem(this.props.category + "Trending", JSON.stringify(data.sort(Methods.clickSort)));
        this.props.handlePageChange(this.props.currentPage);
        console.log("test");
    }

    hideThis = () => {
        this.state.hidden ? this.setState({ hidden: false }) : this.setState({ hidden: true });
        // console.log("this")        ;
    }

    updateLikes = () => {
        console.log("updateLikes", this.props.title, localStorage.getItem("__u"));
        let user = localStorage.getItem("__u");

        API.ifExists(this.props.title).then(res => {
            let currentLikes = res.data.likes;
            // console.log(currentLikes);

            if (currentLikes === null) {
                currentLikes = user + ";"
                this.setState({ liked: true });
                API.updateLikes(this.props.title, currentLikes)
                    .then(res => {
                        console.log("dun");
                    });
            }
            else {
                if (currentLikes.search(user) === -1) {
                    currentLikes += user + ";"
                    this.setState({ liked: true });
                    API.updateLikes(this.props.title, currentLikes)
                        .then(res => {
                            console.log("dun");
                        });
                }
            }
        });

        // need to update localstorage as well
    }

    isLiked = () => {
        if(this.props.likes) {
            let trimmed = this.props.likes.slice(0, -1);
            let likeArr = trimmed.split(";");
            // console.log(likeArr);
            if(likeArr.indexOf(localStorage.getItem("__u")) !== -1) {
                // console.log("yes");
                this.setState({ liked: true });
            }
        }
    }

   // Need a find all likes function which gets all the like columns, parses through
   // each of the strings, if it finds the current user, then adds that article
   // to array, continue onto next;    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="container-fluid">
                        <div className={this.props.category === "Entertainment" ? "article entertainment" :
                            this.props.category === "Sports" ? "article sports" :
                                this.props.category === "Science" ? "article science" :
                                    this.props.category === "Health" ? "article health" :
                                        this.props.category === "Tech" ? "article tech" :
                                            this.props.category === "VideoGames" ? "article videogames" :
                                                this.props.category === "Business" ? "article business" :
                                                    "article all"}>
                            <div className={this.props.look === "" ? "artHeader light" : "artHeader dark"}>
                                <div className="title">
                                    <div className="image" style={{ backgroundImage: `url(${this.props.img})` }} title={this.props.title}>
                                    </div>
                                    <span className="artTitle"><a onClick={this.incrementClicks} href={this.props.url} target="_blank">{this.props.title}</a></span>
                                </div>
                                <div className="source">
                                    <p>
                                        <span>
                                            {this.props.source}
                                        </span>
                                        <span>
                                            <label id="publatlabel">POSTED AT: </label>{this.props.publAt}
                                        </span>
                                        <span>
                                            <label id="clickslabel">CLICKS: </label> {this.state.clicks}
                                        </span>
                                        <span>
                                            <label id="commentslabel">COMMENTS: </label> 0
                                        </span>
                                        <span>
                                            <span className={!localStorage.getItem("__u") ?
                                                "oi oi-thumb-up hidden" :
                                                this.state.liked ? "oi oi-thumb-up liked" :
                                                    "oi oi-thumb-up"} onClick={this.updateLikes}>
                                            </span>
                                        </span>


                                    </p>
                                </div>
                            </div>

                            <div className="artBody">
                                <p className={this.state.hidden ? "hidden" : ""}>
                                    {this.props.descr}
                                </p>

                                <div className="misc">
                                    {/* <span  */}
                                    <span onClick={this.hideThis}
                                        className={this.state.hidden ? "oi oi-chevron-bottom" : "oi oi-chevron-top"}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Article;