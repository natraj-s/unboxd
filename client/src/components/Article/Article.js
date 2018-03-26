import React from "react";
import "./Article.css";

const Article = (props) =>
    <div className="container ">
        <div className="row">
            <div className="container-fluid">
                {console.log("here at: ", props.category)}
                <div className={props.category === "Entertainment" ? "article entertainment" :
                    props.category === "Sports" ? "article sports" :
                        props.category === "Science" ? "article science" :
                            props.category === "Health" ? "article health" :
                                props.category === "Tech" ? "article tech" :
                                    props.category === "VideoGames" ? "article videogames" :
                                        props.category === "Business" ? "article business" :
                                            "article all"}>
                    <div className={props.look === "" ? "artHeader light" : "artHeader dark"}>
                        <div className="title">
                            <div className="image" style={{ backgroundImage: `url(${props.img})` }} title={props.title}>
                            </div>
                            <span className="artTitle"><a href={props.url} target="_blank">{props.title}</a></span>
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