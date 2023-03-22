import React from "react";
import { HiRectangleGroup } from "react-icons/hi2";
import { CgList } from "react-icons/cg";
import "./toggleButton.scss";

export const ToggleButton = () => {
    return(
        <div className="btn btn--toggle">
            <button className="btn btn--list">
                <CgList />
            </button>
            <button className="btn btn--tiled">
                <HiRectangleGroup />
            </button>
        </div>
    )
}