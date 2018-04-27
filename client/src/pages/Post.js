import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Post.css";
import LoadingWheel from "../components/LoadingWheel";
import Article from "../components/Article";

class Post extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        article: []
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;

        API.getById(id).then(res => {
            this.setState({
                article: res.data[0],
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="container">
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

                            <div className="container">
                                <div className="row">
                                    <div className="container-fluid">
                                        <div className={this.state.article.category === "Entertainment" ? "col-md-12 belowPost entertainment" :
                                            this.state.article.category === "Sports" ? "col-md-12 belowPost sports" :
                                                this.state.article.category === "Science" ? "col-md-12 belowPost science" :
                                                    this.state.article.category === "Health" ? "col-md-12 belowPost health" :
                                                        this.state.article.category === "Tech" ? "col-md-12 belowPost tech" :
                                                            this.state.article.category === "VideoGames" ? "col-md-12 belowPost videogames" :
                                                                this.state.article.category === "Business" ? "col-md-12 belowPost business" :
                                                                    "col-md-12 belowPost all"}>
                                            <div className="col-md-10">
                                                <div className={!localStorage.getItem("__u") ? "hidden" : "form-group commentForm"}>
                                                    <label>
                                                        <h5>COMMENTING ON THIS POST AS {localStorage.getItem("__u")}:</h5>
                                                    </label>
                                                    <textarea className="form-control" id="commentForm" rows="3"></textarea>
                                                    <button type="button" className="btn commentSubmit">SUBMIT</button>
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
                                                <div className="col-md-11 singleComment">
                                                    <div className="commentHeader">
                                                        <label className="username">Beyonce</label> says:
                                                    </div>
                                                    <div className="commentBody">
                                                        An unprecedented move in the luxe festival's 19-year history, one-third of this year's 
                                                        lineup is comprised of female artists – and at the helm of this progress is none other 
                                                        than Queen Bey herself. Generations past once looked fondly on Woodstock 1969 as a crucial 
                                                        turning point in American culture; but in 2018, our Woodstock, our Monterey Pop, our 
                                                        Isle of Wight, is definitively Beyoncé's headlining set at Coachella.
                                                    </div>
                                                </div>
                                                <div className="col-md-11 singleComment">
                                                    <div className="commentHeader">
                                                        <label className="username">Beyonce</label> says:
                                                    </div>
                                                    <div className="commentBody">
                                                        An unprecedented move in the luxe festival's 19-year history, one-third of this year's 
                                                        lineup is comprised of female artists – and at the helm of this progress is none other 
                                                        than Queen Bey herself. Generations past once looked fondly on Woodstock 1969 as a crucial 
                                                        turning point in American culture; but in 2018, our Woodstock, our Monterey Pop, our 
                                                        Isle of Wight, is definitively Beyoncé's headlining set at Coachella.
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
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