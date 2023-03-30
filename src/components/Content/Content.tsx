import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { ContentView } from "../../features/content/contentSlice";
import { useTranslation } from "react-i18next";
import "./content.scss";
import { NewsSquareList } from "../NewsSquareList/NewsSquareList";
import { NewsRowList } from "../NewsRowList/NewsRowList";
import { fetchNews } from "../../api/newsMock";
import { NewsData } from "../../types/article";
import { Loader } from "../Loader/Loader";

export const Content = () => {
    const {countryCode} = useParams();
    const [ newsData, setNewsData ] = useState<NewsData>();
    const contentView = useSelector((state: RootState) => state.content.contentView);
    const { t } = useTranslation();

    useEffect(() => {
        if (countryCode) {
            fetchNews(countryCode)
                .then(data => setNewsData(data))
                .catch(error => console.log(error))
        }
    }, [countryCode]);

    return(
        <div className="content">
            <h3 className="countent__title">{t("title")} {t(`country.${countryCode}`)}</h3>
            
            { newsData ?
                contentView == ContentView.square ? 
                    <NewsSquareList news={newsData}/>
                    :
                    <NewsRowList news={newsData}/>
                :
                <Loader />
            }
        </div>
    )
}