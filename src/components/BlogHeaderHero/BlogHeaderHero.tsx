import React, { useEffect, useState } from "react";
import Typography from "./Typography";
import Button from "../UI/Button";
import { StaticImage } from "gatsby-plugin-image";
import { fetchGraphQLData } from "../../services/graphqlService";
import { Link } from "gatsby";

interface Blog {
  thumbnail: {
    url: string;
  };
  title: string;
  slug: string;
  description: string;
}

const fetchLatestBlog = async () => {
  const graphqlQuery = {
    query: `
        query LatestBlog {
          blogs(pagination: { limit: 1 }, sort: "createdAt:desc") {
            thumbnail {
              url
            }
            title
            slug
            description
          }
        }
      `,
  };

  try {
    const response = await fetchGraphQLData<{ blogs: Blog[] }>(graphqlQuery);
    const latestBlog = response.data.blogs[0]; // Get the first item in the response
    return latestBlog;
  } catch (error) {
    console.error("Error fetching latest blog:", error);
    return null;
  }
};

const BlogHeaderHero: React.FC = () => {
  const [latestBlog, setLatestBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const loadLatestBlog = async () => {
      const blog = await fetchLatestBlog();
      setLatestBlog(blog);
    };

    loadLatestBlog();
  }, []);

  if (!latestBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen pt-40 px-32 max-md:px-4 max-md:pt-24">
      <section className="max-w-[1184px] max-md:hidden items-start justify-end mx-auto overflow-hidden flex relative flex-col px-12 pt-52 pb-12 rounded-3xl min-h-[600px] max-md:px-5 max-md:pt-24">
        <img
          src={
            latestBlog.thumbnail &&
            process.env.GATSBY_API_URL + latestBlog.thumbnail.url
          }
          alt="Onschool Blog Banner"
          className="object-cover !absolute inset-0 size-full"
        />
        <div className="opacity-90 !absolute bg-gradient-to-b from-transparent to-[#000000] size-full inset-0"></div>
        <div className="h-full flex max-md:flex-col justify-between w-full gap-10 relative max-md:w-[300px]">
          <main className="flex flex-col mt-6 text-white w-[711px]">
            <Typography
              variant="h1"
              className="w-full text-5xl font-bold tracking-tighter leading-[60px] max-md:max-w-full max-md:text-4xl"
            >
              {latestBlog.title}
            </Typography>
            <Typography
              variant="body"
              className="mt-6 text-base leading-6 max-md:max-w-full w-[712px] max-md:w-full"
            >
              {latestBlog.description}
            </Typography>
          </main>
          <Link to={`/${latestBlog.slug}`} className="self-end">
            <Button
              name="Đọc ngay"
              variant="secondary"
              size="desktop"
            />
          </Link>
        </div>
      </section>
      <section className="max-w-[1184px] md:hidden items-start justify-end mx-auto overflow-hidden flex relative flex-col px-12 pt-52 pb-6 rounded-3xl max-md:px-0 max-md:pt-0">
        <img
          src={
            latestBlog.thumbnail &&
            process.env.GATSBY_API_URL + latestBlog.thumbnail.url
          }
          alt="Onschool Blog Banner"
          className="object-cover inset-0 h-[229px] rounded-[36px] size-full"
        />
        <div className="h-full flex max-md:flex-col justify-between w-full gap-6 relative max-md:w-full">
          <main className="flex flex-col mt-6 text-[#475467]">
            <Typography
              variant="h1"
              className="w-full text-5xl font-bold tracking-tight leading-[60px] max-md:max-w-full max-md:text-2xl"
            >
              {latestBlog.title}
            </Typography>
            <Typography
              variant="body"
              className="mt-4 text-base leading-6 text-wrap"
            >
              {latestBlog.description}
            </Typography>
          </main>
          <Link to={`/${latestBlog.slug}`}>
            <Button
              name="Đọc ngay"
              variant="tertiary"
              size="mobile"
              position="self-center"
              classname="md:hidden w-full justify-between"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogHeaderHero;
