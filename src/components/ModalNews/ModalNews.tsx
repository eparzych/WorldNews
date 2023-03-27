import { Link } from "react-router-dom";
import { Article } from "../../types/article";
import { CustomModal } from "../Modal/Modal";
import "./modalNews.scss";

interface IProps {
    isOpen: boolean;
    onClose: Function;
    article: Article;
}

export const ModalNews = (props: IProps) => {
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
