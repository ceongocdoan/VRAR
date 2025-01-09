import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import MissionSection from "../components/MissonSection/MissionSection";
import ProductSection from "../components/ProductsSection/ProductsSection";
import { getImage } from "gatsby-plugin-image";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/ProductBanner.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH,quality: 90,formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.placeholderImage);
  return (
    <Layout>
      <Header/>
      {image ? (
        <HomeBanner backgroundImageSrc={image} title1="Thực tại ảo " title2="Thực tại tăng cường" />
      ) : null}
      <MissionSection />
      <ProductSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sản phẩm thực tại ảo, thực tại tăng cường</title>;

