import * as React from "react";
import type { GetServerDataProps, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import BlogPost from "../components/BlogPost/BlogPost";
import Header from "../components/Header/Header";
// import RelatedPostBlog from "../components/RelatedPostSlickBlog/RelatedPostBlog";

interface BlogDetailsContext {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    url: string;
  };
}

const BlogDetails: React.FC<PageProps<{}, BlogDetailsContext>> = ({
  pageContext,
}) => {
  const { title, category, author, createdAt, content, thumbnail } =
    pageContext;

  return (
    <Layout>
      {/* Render fetched blogs from serverData */}
      <Header />
      <BlogPost
        category={category}
        title={title}
        author={author}
        publishDate={createdAt}
        content={content}
        thumbnail={thumbnail && process.env.GATSBY_API_URL + thumbnail.url}
      />
      {/* <RelatedPostBlog/> */}
      {/* Render registration form */}
    </Layout>
  );
};

export default BlogDetails;

export const Head: React.FC<PageProps<{}, BlogDetailsContext>> = ({
  pageContext,
}) => <title>{pageContext.title}</title>;
