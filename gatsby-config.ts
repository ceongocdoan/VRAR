import type { GatsbyConfig } from "gatsby";
require('dotenv').config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Onschool`,
    siteUrl: `https://devonschool-website.onschool.edu.vn/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Inter\:100,200,300,400,500,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Onschool`,
        short_name: `Onschool`,
        start_url: `/`,
        icon: `./src/assets/images/favicon.png`,
      },
    },
  ],
};

export default config;
