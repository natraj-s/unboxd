import React from "react";
import Article from "../../components/Article";
import "./ContentPane.css";

const ContentPane = props => (
    <div className="container-fluid contentArea">
        {/* {console.log(props)} */}
        {!props.props ?
            <p>Undefined</p> :
        props.props.map((article, index) => (
                <Article
                    key={article.title}
                    title={article.title}
                    author={article.author}
                    publAt={article.publishedAt}
                    source={article.source}
                    url={article.url}
                    img={article.urlToImage}
                    descr={article.description}
                    look={index%2 !== 0 ? "dark" : ""}
                    category={props.category}
                    currentPage={props.currentPage}
                    handlePageChange={props.handlePageChange}
                    clicks={article.clicks}
                    likes={article.likes}
                    isLoggedIn={props.isLoggedIn}
                // hidden={this.state.hidden}
                // isHidden={this.isHidden}
                />
            ))}
    </div>

);

export default ContentPane;