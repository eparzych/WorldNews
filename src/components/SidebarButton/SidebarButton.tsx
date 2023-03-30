import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { openSidebar, closeSidebar } from "../../features/sidebar/sidebarSlice";
import "./sidebarButton.scss";

export const SidebarButton = () => {
    const sidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
    const dispatch = useDispatch();
    
    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(openSidebar());
        } else {
            dispatch(closeSidebar());
        }
    }
    return(
    <>
        <input type="checkbox" 
            className="menu__btn" 
            id="menu__btn" 
            checked={sidebarOpen} 
            onChange={handleCheckbox} 
        />
        <label htmlFor="menu__btn" className="menu__toggle">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </>
    )
}