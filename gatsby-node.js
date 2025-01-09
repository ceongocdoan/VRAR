const axios = require("axios");
const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Define the GraphQL queries
  const jobsQuery = {
    query: `
      query Jobs {
        jobs(pagination: { limit: -1 }) {
          title
          slug
          quantity
          expiredDate
          experience
          type
          content
          onschool_locations {
            name
          }
        }
      }
    `,
  };

  const blogsQuery = {
    query: `
      query Blog {
  blogs(pagination: { limit: -1 }) {
    author
    blog_category {
      name
    }
    content
    description
    slug
    thumbnail {
      url
    }
    title
    createdAt
  }
}
    `,
  };

  try {
    // Fetch job data
    const jobResponse = await axios.post(
      `${process.env.GATSBY_API_URL}/graphql`,
      jobsQuery,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`,
        },
      }
    );
    const jobs = jobResponse.data.data.jobs || [];

    jobs.forEach((job) => {
      // Create job details page
      createPage({
        path: `/${job.slug}`,
        component: path.resolve("./src/templates/job-details.tsx"),
        context: {
          slug: job.slug,
          title: job.title,
          quantity: job.quantity,
          expiredDate: job.expiredDate,
          type: job.type,
          experience: job.experience,
          location: job.onschool_locations.map((loc) => loc.name),
          content: job.content,
        },
      });

      // Create job apply page
      createPage({
        path: `/${job.slug}/ung-tuyen`,
        component: path.resolve("./src/templates/job-apply.tsx"),
        context: {
          slug: job.slug,
          title: job.title,
          quantity: job.quantity,
          expiredDate: job.expiredDate,
          type: job.type,
          experience: job.experience,
          location: job.onschool_locations.map((loc) => loc.name),
        },
      });
    });

    // Fetch blog data
    const blogResponse = await axios.post(
      `${process.env.GATSBY_API_URL}/graphql`,
      blogsQuery,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`,
        },
      }
    );
    const blogs = blogResponse.data.data.blogs || [];

    blogs.forEach((blog) => {
      // Create blog post page
      createPage({
        path: `/${blog.slug}`,
        component: path.resolve("./src/templates/blog-post.tsx"),
        context: {
          slug: blog.slug,
          author: blog.author,
          category: blog.blog_category.name,
          content: blog.content,
          description: blog.description,
          thumbnail: blog.thumbnail,
          title: blog.title,
          createdAt: blog.createdAt
        },
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
