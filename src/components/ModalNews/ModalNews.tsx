import { Link } from "react-router-dom";
import { CustomModal } from "../Modal/Modal";
import "./modalNews.scss";

export const ModalNews = (props: any) => {
    const { isOpen, onClose, article } = props;

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <article className="article">
                <p className="article__content">{article?.content}</p>
                <p className="article__author"><span>Autor: </span>{article?.author}</p>
                <p className="article__url">
                    <span>Zobacz więcej pod: </span>
                    <Link to={article?.url} className="link">{article?.url}</Link>
                </p>
            </article>
        </CustomModal>
    );
}
