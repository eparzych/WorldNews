import { useState } from "react";
import { ModalNews } from "../ModalNews/ModalNews";
import "./newsRowList.scss";

export const NewsRowList = (props: any) => {
    const { news } = props;
    const [isOpen, setOpen] = useState<Boolean>(false);

    function openNewsPopup (){
        setOpen(!isOpen);
    }
    
    return(
        <table className="news-row-list">
            <thead className="news-row__header">
                <th>Tytuł artykułu</th>
                <th>Źródło</th>
                <th>Data publikacji</th>
            </thead>
            <tbody className="news-row__content">
            { news && news.articles.map((article: any) => 
                <>
                    <tr className="news-row__item" onClick={openNewsPopup}>
                        <td className="content__title">{article.title}</td>
                        <td className="content__subtitle">{article.source.name}</td>
                        <td className="content__date">{article.publishedAt}</td>
                    </tr>
                    <ModalNews isOpen={isOpen} onClose={openNewsPopup} article={article}/>
                </>
            )}
            </tbody>
        </table>
    )
}
