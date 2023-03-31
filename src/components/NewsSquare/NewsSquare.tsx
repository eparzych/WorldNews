import { useState } from "react";
import { Article } from "../../types/article";
import { NewsImg } from "../NewsImg/NewsImg";
import { ModalNews } from "../ModalNews/ModalNews";
import "./newsSquare.scss";

interface IProps {
    article: Article;
}

export const NewsSquare = (props: IProps) => {
    const { article } = props;
    const [isOpen, setOpen] = useState<boolean>(false);

    return(
        <>
            <article className="news-square" onClick={() => setOpen(true)}>
                <NewsImg urlToImage={article.urlToImage}/>
                <div className="news-square__content">
                    <h2 className="content__title">{article.title}</h2>
                    <p className="content__subtitle">{article.source.name}</p>
                    <p className="content__date">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                    <div className="content__text">{article.description}</div>
                </div>
            </article>
            { isOpen && <ModalNews isOpen={true} onClose={() => setOpen(false)} article={article}/> }
        </>
    )
}
