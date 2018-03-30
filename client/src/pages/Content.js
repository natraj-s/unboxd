import React from "react";
import API from "../utils/API";
import "./Content.css";
import Navbar from "../components/Navbar";
import Catbar from "../components/Catbar";
import ContentPane from "../components/ContentPane";

class Content extends React.Component {
    state = {
        content: [],
        currentPage: "Breaking",
        currentCat: "Homepage"
        // hidden: "false"
    }

    componentDidMount() {
        this.updateContent("");
    }

    handleCatChange = cat => {
        this.setState({ currentCat: cat });
        this.updateContent(cat);
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
        console.log("this.state.currentCat ", this.state.currentCat);
        this.sortBy(page);   
    }

    sortBy = (order) => {
        if (order === "Aged") {
            this.setState({
                content: JSON.parse(localStorage.getItem(this.state.currentCat + "Aged"))
            });

        }
        if (order === "Breaking") {
            console.log("Breaking? ", order);
            this.setState({
                content: JSON.parse(localStorage.getItem(this.state.currentCat))
            });
        }
    }

    ageSort = (a, b) => {
        if(a.publishedAt < b.publishedAt) {
            return -1;
        }
        if(a.publishedAt > b.publishedAt) {
            return 1;
        }   
        return 0;
    }

    newSort = (a,b) => {
        if(a.publishedAt < b.publishedAt) {
            return 1;
        }
        if(a.publishedAt > b.publishedAt) {
            return -1;
        }   
        return 0;
    }

    setDefaultCounter = (data) => {
        let temp = data;
        temp.articles.forEach((element, index) => {
            element.counter = 0;
        });
        return temp;
    }

    createArticle = (data, category) => {
        let temp = {};

        API.ifExists(data.title)
            .then(res => {
                if (res.data === null) {
                    temp = {
                        key: data.url,
                        title: data.title,
                        author: data.author,
                        publishedAt: data.publishedAt,
                        source: data.source.name,
                        url: data.url,
                        urlToImage: data.urlToImage,
                        description: data.description,
                        category: category,
                        clicks: "0",
                        comments: "0"
                    }

                    API.store(temp);
                }
            });
    }

    getAndStoreArticles = (category, display) => {
        let data = {};

        if (category === "Homepage") {
            API.getHomepage()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Homepage", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("HomepageAged", JSON.stringify(data));
                    this.handlePageChange(this.state.currentPage);
                }).catch(err => console.log(err));
        }
        if (category === "Entertainment") {
            API.getEntertainment()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Entertainment", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("EntertainmentAged", JSON.stringify(data));
                    this.handlePageChange(this.state.currentPage);
                }).catch(err => console.log(err));
        }
        if (category === "Sports") {
            API.getSports()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Sports", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("SportsAged", JSON.stringify(data));
                }).catch(err => console.log(err));
        }
        if (category === "Science") {
            API.getScience()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Science", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("ScienceAged", JSON.stringify(data));
                }).catch(err => console.log(err));
        }
        if (category === "Health") {
            API.getHealth()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Health", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("HealthAged", JSON.stringify(data));
                }).catch(err => console.log(err));
        }
        if (category === "Tech") {
            API.getTechnology()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Tech", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("TechAged", JSON.stringify(data));
                }).catch(err => console.log(err));
        }
        if (category === "VideoGames") {
            API.getVideoGames()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("VideoGames", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("VideoGamesAged", JSON.stringify(data));
                }).catch(err => console.log(err));
        }
        if (category === "Business") {
            API.getBusiness()
                .then(res => {
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    data.sort(this.newSort);
                    this.setState({
                        content: data
                    });             

                    localStorage.setItem("Business", JSON.stringify(data));
                    data.sort(this.ageSort);
                    localStorage.setItem("BusinessAged", JSON.stringify(data));
                }).catch(err => console.log(err));
        }

    }

    updateContent = (cat) => {
        if (cat === "Entertainment") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("EntertainmentDate"), 10));
            if (localStorage.getItem("Entertainment") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Entertainment"))
                });
                this.handlePageChange(this.state.currentPage);
                console.log("Ent difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("Entertainment", true);
                localStorage.setItem("EntertainmentDate", Date.now());
            }
        }
        else if (cat === "Sports") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("SportsDate"), 10));
            if (localStorage.getItem("Sports") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Sports"))
                });
                console.log("Sports difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("Sports", true);
                localStorage.setItem("SportsDate", Date.now());
            }
        }
        else if (cat === "Science") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("ScienceDate"), 10));
            if (localStorage.getItem("Science") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Science"))
                });
                console.log("Science difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("Science", true);
                localStorage.setItem("ScienceDate", Date.now());
            }
        }
        else if (cat === "Health") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("HealthDate"), 10));
            if (localStorage.getItem("Health") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Health"))
                });
                console.log("Health difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("Health", true);
                localStorage.setItem("HealthDate", Date.now());
            }
        }
        else if (cat === "Tech") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("TechDate"), 10));
            if (localStorage.getItem("Tech") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Tech"))
                });
                console.log("Tech difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("Tech", true);
                localStorage.setItem("TechDate", Date.now());
            }
        }
        else if (cat === "VideoGames") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("VideoGamesDate"), 10));
            if (localStorage.getItem("VideoGames") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("VideoGames"))
                });
                console.log("VideoGames difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("VideoGames", true);
                localStorage.setItem("VideoGamesDate", Date.now());
            }
        }
        else if (cat === "Business") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("BusinessDate"), 10));
            if (localStorage.getItem("Business") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Business"))
                });
                console.log("Business difference is: " + diff);
            }
            else {
                this.getAndStoreArticles("Business", true);
                localStorage.setItem("BusinessDate", Date.now());
            }
        }
        else {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("HomepageDate"), 10));
            if (localStorage.getItem("Homepage") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: JSON.parse(localStorage.getItem("Homepage"))
                });
                this.handlePageChange(this.state.currentPage);
                console.log("Homepage difference is: " + diff);
                // console.log()
            }
            else {
                this.getAndStoreArticles("Homepage", true);
                localStorage.setItem("HomepageDate", Date.now());
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