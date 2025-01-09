import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { ProductsHero } from "../components/ProductsHero/ProductsHero";
import Logo from "../assets/images/Logo.svg";
import { BenefitsList } from "../components/BenefitsList/BenefitsList";
import Button from "../components/UI/Button";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import Header from "../components/Header/Header";
import { getImage } from "gatsby-plugin-image";
import Laptop1 from "../assets/images/BenefitsList/Laptop1.svg"
import Certificate from "../assets/images/BenefitsList/Certificate.svg"
import tv from "../assets/images/BenefitsList/tv.svg"
import Case from "../assets/images/BenefitsList/case.svg"


const benefitsData = [
  { icon: Laptop1, title: "Guided Self-Practice", description:"Học tập chủ động với AI và Mentor 1:1" },
  { icon: Certificate, title: "Learning By Doing", description:"" },
  { icon: tv, title: "Project base Learning", description: "Thực hành kỹ năng thông qua dự án thực tiễn"},
  { icon: Case, title: "Mở rộng cơ hội nghề nghiệp", description: ""},
];

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/Skillbanneruni.png" }
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
      <Header bgColor="bg-[#0071BB] bg-opacity-100" />
      {image ? (
        <ProductsHero
          headings={["Mở khoá kỹ năng", "Nâng tầm sự nghiệp"]}
          description="Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực tiễn - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một cách hiệu quả."
          logoSrc={Logo}
          backgroundImageSrc={image}
        />
      ) : null}
      <BenefitsList benefits={benefitsData}/>
      <SkillsSection />
      <div onClick={() => window.open("https://www.onskill.edu.vn/", "_blank")} className="w-screen flex justify-center px-32 py-16 max-md:px-4  max-md:py-12">
        <Button
          name="Xem thêm"
          size="desktop"
          variant="primary"
          position="self-center"
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool - Skill</title>;
