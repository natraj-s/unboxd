import React from "react";
import API from "../utils/API";
import "./Content.css";
import Navbar from "../components/Navbar";
import Catbar from "../components/Catbar";
import ContentPane from "../components/ContentPane";

class Content extends React.Component {
    state = {
        content: {},
        currentPage: "Trending",
        currentCat: "All"
        // hidden: "false"
    }

    componentDidMount() {
        this.updateContent("");
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleCatChange = cat => {        
        this.setState({ currentCat: cat });  
        this.updateContent(cat);      
    }

    // isHidden = hidden => {
    //     this.setState({ hidden: hidden });
    // }

    updateContent = (cat) => {
        console.log("this.current.state: ", this.state.currentCat);
        if(cat === "Entertainment") {
            API.getEntertainment()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else if(cat === "Sports") {
            API.getSports()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else if(cat === "Science") {
            API.getScience()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else if(cat === "Health") {
            API.getHealth()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else if(cat === "Tech") {
            API.getTechnology()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else if(cat === "VideoGames") {
            API.getVideoGames()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else if(cat === "Business") {
            API.getBusiness()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }
        else {
            API.getHomepage()
                .then(res =>
                    this.setState({
                        content: res.data
                    })
                )
                .catch(err => console.log(err));
        }

    }

    render() {
        console.log(this.state.content);
        return (
            <div className="mainContent">
                <div className="nav">
                    <Navbar currentPage={this.state.currentPage}
                        handlePageChange={this.handlePageChange}                        
                    />
                </div>
                <div className="cat">
                    <Catbar currentCat={this.state.currentCat}
                        handleCatChange={this.handleCatChange}
                        updateContent={this.updateContent}
                    />
                </div>
                <div className="container">
                    <ContentPane props={this.state.content} />
                </div>
            </div>
        );
    }
};

export default Content;