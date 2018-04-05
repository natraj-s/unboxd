import React, { Component } from "react";
import "./Userpage.css";
import API from "../utils/API";
import ContentPane from "../components/ContentPane";
import LoadingWheel from "../components/LoadingWheel";

class Userpage extends Component {
    state = {
        content: {},
        loading: true
    }

    componentDidMount = () => {
        this.getLikedPosts();
    }

    getLikedPosts = () => {
        let user = localStorage.getItem("__u");

        API.getLikesByUser(user)
            .then(res => {
                let articles = res.data.map(elem => elem.articleId);
                // console.log("user", articles);

                if(articles.length > 0) {
                    API.getById(articles)
                    .then(res => {
                        // console.log("here 2 ", res.data);
                        this.setState({ content: res.data });
                        this.setState({ loading : false });
                    });
                }
                else {
                    this.setState({ content: null });
                    this.setState({ loading : false });
                }
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="container-fluid">
                        <div className="col-md-12 userpageContent">
                            <div className="userpageHeader">
                                <h1 className="greeting">
                                    WELCOME <label className="user">{localStorage.getItem("__u")}</label>
                                </h1>
                                <h3>HERE ARE YOUR LIKED POSTS</h3>
                            </div>                            
                            <div className="userpagePosts">                                
                                {this.state.loading ? <LoadingWheel /> : 
                                this.state.content === null || this.state.content === undefined ? 
                                    <div className="msgToUser">
                                        <h2>YOU HAVEN'T LIKED ANYTHING YET. START BROWSING AND LIKING!</h2>
                                    </div>
                                :
                                <ContentPane props={this.state.content}
                                            page="userpage" />}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Userpage;