import React from "react";
import "./main.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Content } from "../Content/Content";

export const Main = () => {
    return(
        <>
            <p>Main</p>
            <Sidebar />
            <Content />
        </>
    )
}