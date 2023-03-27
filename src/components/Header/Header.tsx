import { ChangeEvent, useState } from "react";
import { BsEmojiWink} from "react-icons/bs";
import { Link } from "react-router-dom";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { openSidebar, closeSidebar } from "../../features/sidebar/sidebarSlice";
import { ModalTask } from "../ModalTask/ModalTask";
import "./header.scss";

export const Header = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const dispatch = useDispatch();

    const [isOpen, setOpen] = useState<Boolean>(false);

    function openModalTask(){
        setOpen(!isOpen);
    }

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(openSidebar());
        } else {
            dispatch(closeSidebar());
        }
    }

    return(
        <>
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="logo">
                    gn<span className="logo__text">News</span>
                </Link>
                <button className="btn" onClick={openModalTask}><BsEmojiWink/></button>
                <ToggleButton/>
                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn" checked={sidebarOpen} onChange={handleCheckbox} />
                    <label htmlFor="menu__btn" className="menu__toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </nav>
            </div>
        </header>
        <ModalTask isOpen={isOpen} onClose={openModalTask} />
        </>
    )
}
