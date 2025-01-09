import React, { useEffect, useState } from "react";
import ChipButton from "./ChipButton";
import BlogCard from "./BlogCard";
import { fetchGraphQLData } from "../../services/graphqlService";
import Pagination from "../Pagination/Pagination";

interface Blog {
  thumbnail: {
    url: string;
  };
  title: string;
  blog_category: {
    name: string;
  };
  slug: string;
  description: string;
  createdAt: string;
}

interface BlogSectionProps {
  props: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({props}) => {

  const [category, setCategory] = useState<string>("");
  const [blogsData, setBlogsData] = useState<Blog[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const blogsPerPage = 6;

  useEffect(() => {
    setCategory(props);
  }, [props]);
  // Fetch blogs with pagination and filter by category
  const fetchBlogs = async () => {
    const graphqlQuery = {
      query: `
        query Blogs($filters: BlogFiltersInput, $pagination: PaginationArg, $sort: [String]) {
          blogs(filters: $filters, pagination: $pagination, sort: $sort) {
            thumbnail {
              url
            }
            blog_category {
              name
            }
            title
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
        pagination: {
          limit: blogsPerPage,
          start: (currentPage - 1) * blogsPerPage,
        },
        sort: ["createdAt:desc"], // Sort by creation date, newest first
      },
    };

    try {
      const response = await fetchGraphQLData<{ blogs: Blog[] }>(graphqlQuery);
      const { blogs } = response.data;
      setBlogsData(blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch the total count of blogs for the current filter
  const fetchTotalBlogCount = async () => {
    const countQuery = {
      query: `
        query TotalBlogCount($filters: BlogFiltersInput) {
          blogs(filters: $filters) {
            documentId
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
      const countResponse = await fetchGraphQLData<{ blogs: { id: string }[] }>(
        countQuery
      );
      const totalBlogCount = countResponse.data.blogs.length;
      setTotalPages(Math.ceil(totalBlogCount / blogsPerPage));
    } catch (error) {
      console.error("Error fetching total blog count:", error);
    }
  };

  // Fetch blogs and total count on load or when filters/pagination changes
  useEffect(() => {
    fetchBlogs();
    fetchTotalBlogCount();
  }, [category, currentPage]);

  // Reset to page 1 and apply new filter when a category changes
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page for new category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full px-32 py-16 max-md:px-4 max-md:py-6">
      <section className="max-w-[1184px] mx-auto flex overflow-hidden flex-col items-center bg-white ">
        <h2 className="text-5xl self-start font-bold tracking-tighter leading-[60px] text-slate-700 max-md:max-w-full max-md:text-4xl">
          Tin tức
        </h2>
        <div className="flex self-start flex-wrap gap-2 items-start mt-6 text-xl leading-8 text-slate-600 max-md:max-w-full">
          <ChipButton
            label="Tất cả"
            onClick={() => handleCategoryChange("")}
            category={category}
          />
          <ChipButton
            label="Tin tức Edtech"
            onClick={() => handleCategoryChange("Tin tức Edtech")}
            category={category}
          />
          <ChipButton
            label="Tin Onschool"
            onClick={() => handleCategoryChange("Tin Onschool")}
            category={category}
          />
          <ChipButton
            label="Tin Sản phẩm"
            onClick={() => handleCategoryChange("Tin Sản phẩm")}
            category={category}
          />
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-y-6 max-md:gap-y-4 items-center my-6 max-w-full w-[1184px]">
          {blogsData.map((item, index) => (
            <BlogCard
              key={index}
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
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </section>
    </div>
  );
};

export default BlogSection;
