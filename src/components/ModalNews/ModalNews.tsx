import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <article className="article">
            <h2 className="article__title">{article.title}</h2>
                <p className="article__content">
                    {article?.content}
                </p>
                <p className="article__author">
                    <span>{t("author")}</span>
                    {article?.author}
                </p>
                <p className="article__url">
                    <span>{t("seeMore")}</span>
                    <a href={article?.url} className="link" target="_blank">
                        {article?.url}
                    </a>
                </p>
            </article>
        </CustomModal>
    );
}
