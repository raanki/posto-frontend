// app/article/ArticleContent.tsx
"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { Article, ArticleResponse, getArticleByKeyword } from "@/app/services/ArticleService";
import SingleArticle from "@/app/article/SingleArticle";

const ArticleContent = () =>
{
  const [results, setResults] = useState<Article[]>([]);

  const handleSearch = async (query: string) =>
  {
    const res = await getArticleByKeyword(query);
    console.log("res =>", res); // vérifie que tu vois bien articles
    setResults(res); // ✅ plus de res.data
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-xl">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {Array.isArray(results) && results.map((article, idx) => (
          <div key={idx} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <SingleArticle article={article} />
          </div>
        ))}
      </div>




    </>
  );
};

export default ArticleContent;
