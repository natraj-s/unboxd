import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        counter: this.props.clicks
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1})
        this.storeCountData();
    }

    storeCountData = () => {     
        let data = JSON.parse(localStorage.getItem(this.props.category));

        data.articles.forEach(element => {
            if(element.title === this.props.title) {
                element.counter = parseInt(element.counter, 10) + 1;
                this.setState({ counter: element.counter });
            }
        });

        localStorage.setItem(this.props.category, JSON.stringify(data));
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
                                    <span className="artTitle"><a onClick={this.incrementCounter} href={this.props.url} target="_blank">{this.props.title}</a></span>
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
                                            <label id="clickslabel">CLICKS: </label> {this.state.counter}
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