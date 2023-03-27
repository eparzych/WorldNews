import { useState } from "react";
import { CiImageOff } from "react-icons/ci";
import { ModalNews } from "../ModalNews/ModalNews";
import "./newsSquare.scss";

export const NewsSquare = (props: any) => {
    const { article } = props;
    const [isOpen, setOpen] = useState<Boolean>(false);

    function openNewsPopup (){
        setOpen(!isOpen);
    }
    return(
        <>
            <article className="news-square" onClick={openNewsPopup}>
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
            <ModalNews isOpen={isOpen} onClose={openNewsPopup} article={article}/>
        </>
    )
}
