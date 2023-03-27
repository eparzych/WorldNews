import { NewsData } from "../../types/article";
import { NewsSquare } from "../NewsSquare/NewsSquare";
import "./newsSquareList.scss";

interface IProps {
    news: NewsData;
}

export const NewsSquareList = (props: IProps) => {
    const { news } = props;
    return(
        <div className="newsSquareList">
            { news.articles.map(article => <NewsSquare article={article} key={article.url} />) }
        </div>
    )
}