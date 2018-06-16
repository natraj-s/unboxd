import React from "react";
import API from "../utils/API";
import Methods from "../utils/Methods";
import "./Content.css";
import Navbar from "../components/Navbar";
import Catbar from "../components/Catbar";
import ContentPane from "../components/ContentPane";
import LoadingWheel from "../components/LoadingWheel";

class Content extends React.Component {
    state = {
        content: [],
        currentPage: "Breaking",
        currentCat: "Homepage",
        loading: false
        // hidden: "false"
    }

    componentDidMount() {
        this.updateContent("");
    }

    componentWillUnmount() {
        console.log("unmounted");
        this.setState({
            content: [],
            currentPage: "Breaking",
            currentCat: "Homepage",
            loading: false
        });
    }

    handleCatChange = cat => {
        this.setState({ currentCat: cat });
        this.updateContent(cat);
    }


    handlePageChange = page => {
        this.setState({ currentPage: page });
        // console.log("Entered this call at " + Date.now() + " " + page);
        API.getLatest(this.state.currentCat)
            .then(res => {
                let data = res.data;
                // console.log("original this.state.currentCat ", this.state.currentCat);
                localStorage.setItem(this.state.currentCat, JSON.stringify(data));

                data.sort(Methods.ageSort);
                // console.log("aged this.state.currentCat ", this.state.currentCat);

                localStorage.setItem(this.state.currentCat + "Aged", JSON.stringify(data));

                data.sort(Methods.clickSort);
                localStorage.setItem(this.state.currentCat + "Trending", JSON.stringify(data));
                this.sortBy(page);
            }
            );
    }

    sortBy = (order) => {
        // console.log("entered");
        this.setState({ currentPage: order });
        if (order === "Breaking") {
            // console.log("Breaking? ", order);
            this.setState({
                content: JSON.parse(localStorage.getItem(this.state.currentCat)),
                loading: false
            });
        }
        if (order === "Aged") {
            this.setState({
                content: JSON.parse(localStorage.getItem(this.state.currentCat + "Aged")),
                loading: false
            });

        }
        if (order === "Trending") {
            // console.log("Trending? ", order);
            this.setState({
                content: JSON.parse(localStorage.getItem(this.state.currentCat + "Trending")),
                loading: false
            });
        }
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
                        key: data.title,
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
                    this.setState({ loading: true });
                    data = res.data.articles;
                    // console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    // console.log("Done creating at ", Date.now());
                    // data.sort(this.newSort);
                    // this.setState({
                    //     content: data
                    // });

                    // localStorage.setItem("Homepage", JSON.stringify(data));
                    // data.sort(this.ageSort);
                    // localStorage.setItem("HomepageAged", JSON.stringify(data));
                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "Entertainment") {
            API.getEntertainment()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    // console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "Sports") {
            API.getSports()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    // console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "Science") {
            API.getScience()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "Health") {
            API.getHealth()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    // console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "Tech") {
            API.getTechnology()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "VideoGames") {
            API.getVideoGames()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    // console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }
        if (category === "Business") {
            API.getBusiness()
                .then(res => {
                    this.setState({ loading: true });
                    data = res.data.articles;
                    // console.log("I came ", data);

                    data.forEach(elem => {
                        this.createArticle(elem, category);
                    });

                    setTimeout(() => {
                        this.handlePageChange(this.state.currentPage);
                    }, 2000);
                }).catch(err => console.log(err));
        }

    }

    updateContent = (cat) => {
        if (cat === "Entertainment") {
            let diff = Date.now() - new Date(parseInt(localStorage.getItem("EntertainmentDate"), 10));
            if (localStorage.getItem("Entertainment") && !isNaN(diff) && diff < 180000000000000000) {
                this.setState({
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("EntertainmentAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("EntertainmentTrending")) :
                            JSON.parse(localStorage.getItem("Entertainment"))
                });
                // console.log("Ent difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("SportsAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("SportsTrending")) :
                            JSON.parse(localStorage.getItem("Sports"))
                });
                // console.log("Sports difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("ScienceAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("ScienceTrending")) :
                            JSON.parse(localStorage.getItem("Science"))
                });
                // console.log("Science difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("HealthAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("HealthTrending")) :
                            JSON.parse(localStorage.getItem("Health"))
                });
                // console.log("Health difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("TechAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("TechTrending")) :
                            JSON.parse(localStorage.getItem("Tech"))
                });
                // console.log("Tech difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("VideoGamesAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("VideoGameTrending")) :
                            JSON.parse(localStorage.getItem("VideoGames"))
                });
                // console.log("VideoGames difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("BusinessAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("BusinessTrending")) :
                            JSON.parse(localStorage.getItem("Business"))
                });
                // console.log("Business difference is: " + diff);
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
                    content: this.state.currentPage === "Aged" ?
                        JSON.parse(localStorage.getItem("HomepageAged")) :
                        this.state.currentPage === "Trending" ?
                            JSON.parse(localStorage.getItem("HomepageTrending")) :
                            JSON.parse(localStorage.getItem("Homepage"))
                });
                // console.log("Homepage difference is: " + diff);
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
        // console.log("isLoggedIn: " , this.props.isLoggedIn);
        return (
            <div className="mainContent">
                <div className="nav">
                    <Navbar currentPage={this.state.currentPage}
                        handlePageChange={this.sortBy}
                    />
                </div>
                <div className="cat">
                    <Catbar currentCat={this.state.currentCat}
                        handleCatChange={this.handleCatChange}
                        updateContent={this.updateContent}
                    />
                </div>
                    {this.state.loading ? <LoadingWheel /> :
                        <ContentPane props={this.state.content}
                            category={this.state.currentCat}
                            currentPage={this.state.currentPage}
                            handlePageChange={this.sortBy}
                            isLoggedIn={this.props.isLoggedIn}
                            page="mainpage" />}

            </div>
        );
    }
};

export default Content;