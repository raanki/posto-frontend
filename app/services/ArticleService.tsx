import { callApi } from "./ApiService";

export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ArticleResponse = {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
  code?: string;
  message?: string;
};


export async function getArticleByKeyword(keyword: string): Promise<ArticleResponse> {
  return await callApi<ArticleResponse>(
    `/news/search?keyword=${keyword}`,
    "GET",
  );
}

