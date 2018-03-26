import React from "react";
import "./Article.css";

const Article = (props) =>
    <div className="container ">
        <div className="row">
            <div className="container-fluid">
                <div className="article">
                    <div className={props.look === "" ? "artHeader light" : "artHeader dark"}>
                        <div className="title">
                            <a href={props.url} target="_blank">{props.title}</a>
                            <hr />
                        </div>
                        <div className="source">
                            <p>
                                <span>
                                   {props.source}
                                </span>
                                <span>
                                    <label id="publatlabel">POSTED AT: </label>{props.publAt}
                                </span>
                                <span>
                                    <label id="clickslabel">CLICKS: </label> 999,999
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="artBody">
                        {/* <p className={props.hidden === "true" ? "hidden" : ""}> */}
                        <p>
                            {props.descr}
                        </p>
                        <div className="misc">
                            {/* <span onClick={() => props.hidden === "true" ? props.isHidden("false") : props.isHidden("true")} */}
                                <span className="oi oi-chevron-top"></span>
                        </div>
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