import "./newsRowList.scss";

export const NewsRowList = (props: any) => {
    const { news } = props;
    return(
        <table className="news-row-list">
            <thead className="news-row__header">
                <th>Tytuł artykułu</th>
                <th>Źródło</th>
                <th>Data publikacji</th>
            </thead>
            <tbody className="news-row__content">
            { news && news.articles.map((article: any) => 
                <tr className="news-row__item">
                    <td className="content__title">{article.title}</td>
                    <td className="content__subtitle">{article.source.name}</td>
                    <td className="content__date">{article.publishedAt}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
