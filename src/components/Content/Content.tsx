import React from "react";
import "./content.scss";
import { NewsSquareList } from "../NewsSquareList/NewsSquareList";

export const Content = () => {
    return(
        <div className="content">
            <h3 className="countent__title">INFORMACJE Z KRAJU XYZ</h3>
            <NewsSquareList />
        </div>
    )
}