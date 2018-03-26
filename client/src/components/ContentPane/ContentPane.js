import React from "react";
import Article from "../../components/Article";
import "./ContentPane.css";

const ContentPane = props => (
    <div className="container-fluid contentArea">
        {!props.props.articles ?
            <p>Undefined</p> :
        props.props.articles.map(article => (
                <Article
                    key={article.publishedAt}
                    author={article.author}
                    descr={article.description}
                    publAt={article.publishedAt}
                    source={article.source.name}
                    title={article.title}
                    url={article.url}
                    img={article.urlToImage}
                // hidden={this.state.hidden}
                // isHidden={this.isHidden}
                />
            ))}
    </div>

);

export default ContentPane;