import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SliderNavigate from "../UI/SliderNavigate";
import BlogCard from "./BlogCard";
import BlogTags from "./BlogTags";
import Button from "../UI/Button";
import { Link } from "gatsby";
import { fetchGraphQLData } from "../../services/graphqlService";

interface Blog {
  thumbnail: {
    url: string;
  };
  title: string;
  blog_category: {
    name: string;
  };
  category: string;
  slug: string;
  description: string;
  createdAt: string;
}

const RelatedPostBlog: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [category, setCategory] = useState<string>("");
  const [blogsData, setBlogsData] = useState<Blog[]>([]);
  const [progress, setProgress] = useState<number>(
    (1 / blogsData.length) * 100
  );

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScrool: 1,
    variableWidth: true,
    className: "custom-slick-slider",
    beforeChange: (current: number, next: number) => {
      setProgress(((next + 1) / blogsData.length) * 100);
    },
  };

  const fetchData = async () => {
    const graphqlQuery = {
      query: `
        query Blogs($filters: BlogFiltersInput) {
          blogs(filters: $filters, pagination: { limit: -1 }) {
            thumbnail {
              url
            }
    blog_category {
      name
    }            title
            slug
            description
            createdAt
          }
        }
      `,
      variables: {
        filters: {
          blog_category: category ? { name: { eq: category } } : undefined,
        },
      },
    };

    try {
      const response = await fetchGraphQLData<{ blogs: Blog[] }>(graphqlQuery);
      const { blogs } = response.data;
      setBlogsData(blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      setProgress((1 / blogs.length) * 100);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleCategoryChange = (category: string) => {
    if (category === "Tất cả") {
      setCategory("");
    } else {
      setCategory(category);
    }
  };

  return (
    <div className="w-full flex flex-col px-32 max-md:px-4 py-16 max-sm:py-12 overflow-hidden">
      <div className="w-full">
        <h1 className="max-w-[1184px] mx-auto mb-6 font-bold text-4xl leading-display-md text-[#344054] max-md:text-2xl">
          Bài viết liên quan
        </h1>
        <div className="my-6 max-w-[1184px] mx-auto">
          <BlogTags
            category={category}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {blogsData.map((item, index) => (
          <div className="pr-4" key={index}>
            <BlogCard
              imageSrc={
                item.thumbnail &&
                process.env.GATSBY_API_URL + item.thumbnail.url
              }
              title={item.title}
              description={item.description}
              chipText={item.blog_category.name}
              slug={item.slug}
              buttonText="Tìm hiểu thêm"
            />
          </div>
        ))}
      </Slider>
      <SliderNavigate progress={progress} sliderRef={sliderRef} />
    </div>
  );
};

export default RelatedPostBlog;
