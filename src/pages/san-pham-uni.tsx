import * as React from "react";
import {
  graphql,
  Link,
  useStaticQuery,
  type HeadFC,
  type PageProps,
} from "gatsby";
import Layout from "../components/layout";
import { ProductsHero } from "../components/ProductsHero/ProductsHero";
import Logo from "../assets/images/Logo.svg";
import { BenefitsList } from "../components/BenefitsList/BenefitsList";
import VietnamImage from "../components/VietnamImage/VietnamImage";
import SpecialtySection from "../components/SpecialtySection/SpecialtySection";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
import Button from "../components/UI/Button";
import Header from "../components/Header/Header";
import { getImage } from "gatsby-plugin-image";
import Laptop1 from "../assets/images/BenefitsList/Laptop1.svg";
import Certificate from "../assets/images/BenefitsList/Certificate.svg";
import Hat from "../assets/images/BenefitsList/Hat.svg";

const benefitsData = [
  { icon: Laptop1, title: "Mô hình trái tim" },
  { icon: Certificate, title: "Âm thanh sinh động" },
  { icon: Hat, title: "4 nút bấm chọn các bộ phận" },
];
const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/SkillBanner.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.placeholderImage);
  return (
    <Layout>
      <Header bgColor="bg-[#3643F4] bg-opacity-100" />
      {image ? (
        <ProductsHero
          headings={["Vị trí và vai trò", "Cơ chế hoạt động:"]}
          description="Trái tim là một cơ quan quan trọng trong cơ thể con người, có nhiệm vụ bơm máu đi nuôi cơ thể. Bài tập này sẽ giúp học sinh hiểu về các bộ phận của trái tim và chức năng của chúng."
          logoSrc={Logo}
          backgroundImageSrc={image}
          limitDescription={true}
        />
      ) : null}
      <BenefitsList benefits={benefitsData} />
      <VietnamImage />
      <SpecialtySection type={true} />
      <StatisticsSection />
      <div
        className="w-screen flex justify-center px-32 py-24 max-md:px-4 max-md:py-12"
      >
        <Link to="https://uni.onschool.edu.vn" target="_blank" className="w-fit">
          <Button
            name="Xem thêm"
            size="desktop"
            variant="primary"
            position="self-center"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool - Uni</title>;
