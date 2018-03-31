import React, { Component } from "react";
import "./Article.css";
import API from "../../utils/API";
import Methods from "../../utils/Methods";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        clicks: this.props.clicks
    }

    incrementClicks = () => {
        this.setState({clicks: this.state.clicks + 1})
        this.storeClicksData();
    }

    storeClicksData = () => {     
        let data = JSON.parse(localStorage.getItem(this.props.category));

        data.forEach(element => {
            if(element.title === this.props.title) {
                element.clicks = parseInt(element.clicks, 10) + 1;
                this.setState({ clicks: element.clicks });
                API.updateClicks(element.title, element.clicks).then(res=> {
                });
            }
        });

        localStorage.setItem(this.props.category, JSON.stringify(data));
        localStorage.setItem(this.props.category+"Aged", JSON.stringify(data.sort(Methods.ageSort)));
        localStorage.setItem(this.props.category+"Trending", JSON.stringify(data.sort(Methods.clickSort)));
        this.props.handlePageChange(this.props.currentPage);
    }

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

                                    </p>
                                </div>
                            </div>

                            <div className="artBody">
                                {/* <p className={this.props.hidden === "true" ? "hidden" : ""}> */}
                                <p>
                                    {this.props.descr}
                                </p>
                                <div className="misc">
                                    {/* <span onClick={() => props.hidden === "true" ? props.isHidden("false") : props.isHidden("true")} */}
                                    <span className="oi oi-chevron-top"></span>
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