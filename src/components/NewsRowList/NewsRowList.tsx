import { useState } from "react";
import { Article, NewsData } from "../../types/article";
import { ModalNews } from "../ModalNews/ModalNews";
import "./newsRowList.scss";

interface IProps {
    news: NewsData;
}

export const NewsRowList = (props: IProps) => {
    const { news } = props;
    const [openedArticle, setOpenedArticle] = useState<Article | null>(null);

    return(
        <>
            <table className="news-row-list">
                <thead className="news-row__header">
                    <tr>
                        <th>Tytuł artykułu</th>
                        <th>Źródło</th>
                        <th>Data publikacji</th>
                    </tr>
                </thead>
                <tbody className="news-row__content">
                { news.articles.map((article: any) => 
                        <tr key={article.url} className="news-row__item" onClick={() => setOpenedArticle(article)}>
                            <td className="content__title">{article.title}</td>
                            <td className="content__subtitle">{article.source.name}</td>
                            <td className="content__date">
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </td>
                        </tr>
                )}
                </tbody>
            </table>
            { openedArticle && <ModalNews isOpen={true} onClose={() => setOpenedArticle(null)} article={openedArticle}/> }
        </>
    )
}
