import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./content.scss";
import { NewsSquareList } from "../NewsSquareList/NewsSquareList";
import { NewsRowList } from "../NewsRowList/NewsRowList";
import { fetchNews } from "../../api/news";

export const Content = () => {
    const {countryCode} = useParams();
    const [ newsData, setNewsData ] = useState();

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
            <NewsSquareList news={newsData}/>
            <NewsRowList news={newsData}/>
        </div>
    )
}