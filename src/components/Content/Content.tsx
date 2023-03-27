import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { ContentView } from "../../features/content/contentSlice";
import "./content.scss";
import { NewsSquareList } from "../NewsSquareList/NewsSquareList";
import { NewsRowList } from "../NewsRowList/NewsRowList";
import { fetchNews } from "../../api/newsMock";

export const Content = () => {
    const {countryCode} = useParams();
    const [ newsData, setNewsData ] = useState();
    const contentView = useSelector((state: RootState) => state.content.contentView);

    useEffect(() => {
        if (countryCode) {
            fetchNews(countryCode)
                .then(response => response.json())
                .then(data => setNewsData(data))
        }
    }, [countryCode]);

    return(
        <div className="content">
            <h3 className="countent__title">INFORMACJE Z KRAJU: {countryCode}</h3>
            {
                contentView == ContentView.square ? 
                <NewsSquareList news={newsData}/>
                :
                <NewsRowList news={newsData}/>
            }
        </div>
    )
}