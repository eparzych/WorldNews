import React from "react";
import { NewsSquare } from "../NewsSquare/NewsSquare";
import "./newsSquareList.scss";

export const NewsSquareList = (props: any) => {
    const { news } = props;
    return(
        <div className="newsSquareList">
            { news && news.articles.map((article: any) => <NewsSquare article={article} />) }
        </div>
    )
}