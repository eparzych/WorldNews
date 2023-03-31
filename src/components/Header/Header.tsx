import { useState } from "react";
import { BsEmojiWink} from "react-icons/bs";
import { Link } from "react-router-dom";
import { ModalTask } from "../ModalTask/ModalTask";
import { LanguageList } from "../LanuageList/LanguageList";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { SidebarButton } from "../SidebarButton/SidebarButton";
import "./header.scss";

export const Header = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    function openModalTask(){
        setOpen(!isOpen);
    }

    return(
        <>
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="logo">
                    gn<span className="logo__text">News</span>
                </Link>
                <button className="btn" onClick={openModalTask}><BsEmojiWink/></button>
                <nav className="menu">
                    <LanguageList/>
                    <ToggleButton/>
                    <SidebarButton/>
                </nav>
            </div>
        </header>
        <ModalTask isOpen={isOpen} onClose={openModalTask} />
        </>
    )
}
