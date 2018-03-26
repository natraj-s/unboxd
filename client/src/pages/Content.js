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
        if (cat === "Entertainment") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("EntertainmentDate"), 10));
            if (localStorage.getItem("Entertainment") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Entertainment"))
                });
                console.log("Ent difference is: " + diff);
            }
            else {
                API.getEntertainment()
                    .then(res => {
                        console.log("api");
                        this.setState({
                            content: res.data
                        })
                        console.log("API entertainment");
                        localStorage.setItem("Entertainment", JSON.stringify(res.data));
                        localStorage.setItem("EntertainmentDate", Date.now());
                    }).catch(err => console.log(err));
            }
        }
        else if (cat === "Sports") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("SportsDate"), 10));
            if (localStorage.getItem("Sports") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Sports"))
                });
                console.log("Sports difference is: " + diff);
            }
            else {
                API.getSports()
                    .then(res => {
                        this.setState({
                            content: res.data
                        })
                        console.log("API sports");
                        localStorage.setItem("Sports", JSON.stringify(res.data));
                        localStorage.setItem("SportsDate", Date.now());
                    }).catch(err => console.log(err));
            }
        }
        else if (cat === "Science") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("ScienceDate"), 10));
            if (localStorage.getItem("Science") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Science"))
                });
                console.log("Science difference is: " + diff);
            }
            else {
                API.getScience()
                    .then(res => {
                        this.setState({
                            content: res.data
                        })
                        console.log("API science");
                        localStorage.setItem("Science", JSON.stringify(res.data));
                        localStorage.setItem("ScienceDate", Date.now());
                    }).catch(err => console.log(err));
            }
        }
        else if (cat === "Health") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("HealthDate"), 10));
            if (localStorage.getItem("Health") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Health"))
                });
                console.log("Health difference is: " + diff);
            }
            else {
                API.getHealth()
                .then(res => {
                    this.setState({
                        content: res.data
                    })
                    console.log("API health");
                    localStorage.setItem("Health", JSON.stringify(res.data));
                    localStorage.setItem("HealthDate", Date.now());
                }).catch(err => console.log(err));                    
            }            
        }
        else if (cat === "Tech") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("TechDate"), 10));
            if (localStorage.getItem("Tech") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Tech"))
                });
                console.log("Tech difference is: " + diff);
            }
            else {
                API.getTechnology()
                .then(res => {
                    this.setState({
                        content: res.data
                    })
                    console.log("API tech");
                    localStorage.setItem("Tech", JSON.stringify(res.data));
                    localStorage.setItem("TechDate", Date.now());
                }).catch(err => console.log(err));
            }            
        }
        else if (cat === "VideoGames") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("VideoGamesDate"), 10));
            if (localStorage.getItem("VideoGames") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("VideoGames"))
                });
                console.log("VideoGames difference is: " + diff);
            }
            else {
                API.getVideoGames()
                .then(res => {
                    this.setState({
                        content: res.data
                    })
                    console.log("API videogames");
                    localStorage.setItem("VideoGames", JSON.stringify(res.data));
                    localStorage.setItem("VideoGamesDate", Date.now());
                }).catch(err => console.log(err));
            }
        }
        else if (cat === "Business") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("BusinessDate"), 10));
            if (localStorage.getItem("Business") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Business"))
                });
                console.log("Business difference is: " + diff);
            }
            else {
                API.getBusiness()
                .then(res => {
                    this.setState({
                        content: res.data
                    })
                    console.log("API business");
                    localStorage.setItem("Business", JSON.stringify(res.data));
                    localStorage.setItem("BusinessDate", Date.now());
                }).catch(err => console.log(err));
            }
        }
        else {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("AllDate"), 10));
            if (localStorage.getItem("All") && !isNaN(diff) && diff < 1800000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("All"))
                });
                console.log("All difference is: " + diff);
            }
            else {
                API.getHomepage()
                .then(res => {
                    this.setState({
                        content: res.data
                    })
                    console.log("API all");
                    localStorage.setItem("All", JSON.stringify(res.data));
                    localStorage.setItem("AllDate", Date.now());
                }).catch(err => console.log(err));
            }            
        }
    }

    render() {
        // console.log(this.state.content);
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
                    <ContentPane props={this.state.content}
                        category={this.state.currentCat} />
                </div>
            </div>
        );
    }
};

export default Content;