import { ChangeEvent } from "react";
import { BsEmojiWink} from "react-icons/bs";
import { Link } from "react-router-dom";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { open, close } from "../../features/sidebar/sidebarSlice";
import "./header.scss";

export const Header = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen)
    const dispatch = useDispatch()

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(open());
        } else {
            dispatch(close());
        }
    }

    return(
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="logo">
                    gn<span className="logo__text">News</span>
                </Link>
                <button className="btn"><BsEmojiWink/></button>
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
    )
}
