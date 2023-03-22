import React from "react";
import { BsEmojiWink} from "react-icons/bs";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import "./header.scss";

export const Header = () => {
    return(
        <header className="header">
            <div className="header__container container">
                <a href="/" className="logo">
                    gn<span className="logo__text">News</span>
                </a>
                <button className="btn"><BsEmojiWink/></button>
                <ToggleButton/>
            </div>
        </header>
    )
}
