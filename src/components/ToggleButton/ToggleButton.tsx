import { HiRectangleGroup } from "react-icons/hi2";
import { CgList } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { ContentView, setView } from "../../features/content/contentSlice";
import "./toggleButton.scss";

export const ToggleButton = () => {
    const contentView = useSelector((state: RootState) => state.content.contentView);
    const dispatch = useDispatch()

    return(
        <div className="btn btn--toggle">
            <button className={`btn btn--list ${contentView === ContentView.row ? "btn--active" : ""}`} 
                onClick={() => dispatch(setView(ContentView.row))}>
                <CgList />
            </button>
            <button className={`btn btn--tiled ${contentView === ContentView.square ? "btn--active" : ""}`} 
                onClick={() => dispatch(setView(ContentView.square))}>
                <HiRectangleGroup />
            </button>
        </div>
    )
}