import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import EdtechSolution from "../components/EdtechSolution/EdtechSolution";
// import PedagogicalMethods from "../components/PedagogicalMethods/PedagogicalMethods";
import FMGEMethod from "../components/FMGEMethod/FMGEMethod";
import Method3A from "../components/3AMethod/3AMethod";
import ContactSection from "../components/ContactSection/ContactSection";
import { getImage } from "gatsby-plugin-image";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/EdutechBanner.jpeg" }
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
      {image?<HomeBanner backgroundImageSrc={image} title1="Lý thuyết" title2="Cơ quan tuần hoàn"/>:null}
      <EdtechSolution/>
      {/* <PedagogicalMethods/> */}
      <FMGEMethod/>
      <Method3A/>
      <ContactSection/>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool - Edtech</title>;

