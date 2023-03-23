import React from "react";
import { NewsSquare } from "../NewsSquare/NewsSquare";
import "./newsSquareList.scss";

export const NewsSquareList = () => {
    return(
        <div className="newsSquareList">
            <NewsSquare />
            <NewsSquare />
            <NewsSquare />
            <NewsSquare />
            <NewsSquare />
            <NewsSquare />
            <NewsSquare />
        </div>
    )
}