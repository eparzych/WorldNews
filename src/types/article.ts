
export interface Article {
    source: {
      name: string;
      url: string;
    }
    author: string;
    title: string;
    description: string;
    url: string;
    image: string;
    publishedAt: string;
    content: string;
  }

export interface NewsData {
    totalArticles: number;
    articles: Article[];
}
