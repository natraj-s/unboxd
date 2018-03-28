import React from "react";
import Article from "../../components/Article";
import "./ContentPane.css";

const ContentPane = props => (
    <div className="container-fluid contentArea">
        {!props.props.articles ?
            <p>Undefined</p> :
        props.props.articles.map((article, index) => (
                <Article
                    key={article.url}
                    author={article.author}
                    descr={article.description}
                    publAt={article.publishedAt}
                    source={article.source.name}
                    title={article.title}                    
                    url={article.url}
                    img={article.urlToImage}
                    look={index%2 !== 0 ? "dark" : ""}
                    category={props.category}
                    clicks={article.counter}
                // hidden={this.state.hidden}
                // isHidden={this.isHidden}
                />
            ))}
    </div>

);

export default ContentPane;