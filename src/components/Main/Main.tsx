import { Sidebar } from "../Sidebar/Sidebar";
import { Content } from "../Content/Content";
import "./main.scss";

export const Main = () => {
    return(
        <div className="container">
            <div className="main">
                <Sidebar/>
                <Content/>
            </div>
        </div>
    )
}