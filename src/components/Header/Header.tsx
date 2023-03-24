import { ChangeEvent } from "react";
import { BsEmojiWink} from "react-icons/bs";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import "./header.scss";
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { open, close } from '../../features/sidebar/sidebarSlice'

export const Header = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen)
    const dispatch = useDispatch()

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("change", e.target.checked)
        if (e.target.checked) {
            dispatch(open());
        } else {
            dispatch(close());
        }
    }

    return(
        <header className="header">
            <div className="header__container container">
                <a href="/" className="logo">
                    gn<span className="logo__text">News</span>
                </a>
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
