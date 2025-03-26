import { Article } from "@/app/services/ArticleService";
import Image from "next/image";
import Link from "next/link";

const SingleArticle = ({ article }: { article: Article }) =>
{
  const {
    title,
    url,
    urlToImage,
    description,
    publishedAt,
    author,
    source,
  } = article;

  return (
    <div className="hover:shadow-lg group relative overflow-hidden rounded-md bg-white shadow-md dark:bg-dark transition">
      <Link
        href={url}
        target="_blank"
        className="relative block aspect-[37/22] w-full"
      >
        {urlToImage ? (
          <Image src={urlToImage} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-600 text-sm">
            No image
          </div>
        )}
      </Link>

      <div className="p-5">
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
          <Link href={url} target="_blank">
            {title}
          </Link>
        </h3>

        <p className="text-sm text-body-color mb-4">
          {description || "No description"}
        </p>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>Source : {source?.name || "?"}</p>
          <p>Date : {new Date(publishedAt).toLocaleDateString()}</p>
          <p>Auteur : {author || "Inconnu"}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
