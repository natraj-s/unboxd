import React from "react";
import "./Article.css";

const Article = (props) =>
    <div className="container ">
        <div className="row">
            <div className="container-fluid">
                <div className="article">
                    <div className="artHeader">
                        <div className="title">
                            {props.title}
                        </div>
                        <div className="source">
                            <p>{props.source}</p>
                            <p>{props.publAt}</p>
                        </div>
                    </div>

                    <div className="artBody">
                        <p>{props.descr}</p>
                    </div>

                    {/* <p>{props.author}</p>
                <p>{props.descr}</p>
                <p>{props.publAt}</p>
                <p>{props.source}</p>
                <p>{props.title}</p>
                <img src={props.img} alt="img url" /> */}
                </div>
            </div>
        </div>
    </div>
    ;

export default Article;