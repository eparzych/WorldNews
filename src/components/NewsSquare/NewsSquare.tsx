import { useState } from "react";
import { CiImageOff } from "react-icons/ci";
import { Article } from "../../types/article";
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
                <div className="news-square__img">
                    { article.urlToImage ?
                        <img src={article.urlToImage} alt="picture" />
                    :
                        <div className="img--not-found">
                            <CiImageOff size="90"/>
                            <span>Image not found</span>
                        </div>
                    }
                </div>
                <div className="news-square__content">
                    <h2 className="content__title">{article.title}</h2>
                    <p className="content__subtitle">{article.source.name}</p>
                    <p className="content__date">{article.publishedAt}</p>
                    <div className="content__text">{article.description}</div>
                </div>
            </article>
            { isOpen && <ModalNews isOpen={true} onClose={() => setOpen(false)} article={article}/> }
        </>
    )
}
