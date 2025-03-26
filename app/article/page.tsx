import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import ArticleContent from "@/app/article/ArticleContent";


export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Article = () => {

  return (
    <>
      <Breadcrumb
        pageName="Newsletter"
        description="Get last News"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <ArticleContent />
          </div>

        </div>
      </section>
    </>
  );
};

export default Article;