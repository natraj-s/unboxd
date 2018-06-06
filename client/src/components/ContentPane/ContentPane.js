import React from "react";
import Article from "../../components/Article";
import "./ContentPane.css";

const ContentPane = props => (
    <div className="container-fluid contentArea">
        {/* {console.log(props)} */}
        {!props.props ?
            <p>Undefined</p> :
        props.props.map((article, index) => ( props.page === "mainpage" ?
                <Article
                    key={article.id}
                    id={article.id}
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
                    // comments={article.comments}
                    likes={article.likes}
                    isLoggedIn={props.isLoggedIn}
                    page={props.page}
                /> : 
                <Article
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    author={article.author}
                    publAt={article.publishedAt}
                    source={article.source}
                    url={article.url}
                    img={article.urlToImage}
                    descr={article.description}
                    look={index%2 !== 0 ? "dark" : ""}
                    category={article.category}
                    clicks={article.clicks}
                    // comments={article.comments}
                    page={props.page}                    
                />
            ))}
    </div>

);

export default ContentPane;