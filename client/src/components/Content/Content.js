import React from "react";
import API from "../../utils/API";
import Article from "../Article";

class Content extends React.Component {
    state = {
        content: {}
    }

    // getContent = query => {
    //     API.search("homepage")
    //         .then(res => {
    //             this.setState({ content: res.data });
    //             console.log("res: ", res.data);         
    //         })
    //         .catch(err => console.log(err));
    // }

    componentDidMount() {
        this.updateContent();
    }

    updateContent = () => {
        API.getHomepage()
            .then(res =>
                this.setState({
                    content: res.data
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.content);
        return (
            <div className="container">
                <div className="container-fluid">
                    {this.state.content.articles === undefined ?
                        "" :
                        this.state.content.articles.map(article => (
                            <Article
                                key={article.publishedAt}
                                author={article.author}
                                descr={article.description}
                                publAt={article.publishedAt}
                                source={article.source.name}
                                title={article.title}
                                img={article.urlToImage}
                            />
                        ))}
                </div>
            </div>
        )
    }
};

export default Content;