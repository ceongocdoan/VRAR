import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { ProductsHero } from "../components/ProductsHero/ProductsHero";
// import Logo from "../assets/images/OnschoolEcosystems/BootcampMono.svg";
import { BenefitsList } from "../components/BenefitsList/BenefitsList";
import Button from "../components/UI/Button";
import { ActivitySection } from "../components/ActivitySection/ActivitySection";
import CoursePreviewSlick from "../components/CoursePreviewSlick/CoursePreviewSlick";
import Header from "../components/Header/Header";
import { getImage } from "gatsby-plugin-image";
import Laptop1 from "../assets/images/BenefitsList/Laptop1.svg"
import StatisticsSection2 from "../components/StatisticsSection2/StatisticsSection2";

const benefitsData = [
    { icon: Laptop1, title: "Bootcamp chuẩn quốc tế" },
    { icon: Laptop1, title: "Learning By Doing" },
    { icon: Laptop1, title: "Học tập Lab Online" },
    { icon: Laptop1, title: "Đảm bảo việc làm" },
  ];

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/BootcampBanner.jpeg" }
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


  interface StatisticsData {
    title:string;
    value: string;
    description: string;
  }
  
  const statisticsData: StatisticsData[] = [
    { title:"Học viên tốt nghiệp", value: "5000+", description: "" },
    { title:"Chuyên gia công nghệ giảng dạy", value: "35+", description: "" },
    { title:"Doanh nghiệp",value: "63+", description: "" },
    { title:"Mentor kỹ năng",value: "100+", description: "nghề nghiệp" },
  ];
  return (
    <Layout>
      <Header bgColor="bg-[#37278E] bg-opacity-100" />
      {image ? (
        <ProductsHero
          headings={["Khám phá", "Hệ tuần hoàn"]}
          description="Quan sát mô phỏng cấu trúc của trái tim và các mạch máu.
Chỉ ra các phần chính của trái tim (như tâm nhĩ, tâm thất, van tim, v.v.) và giải thích chức năng của từng phần."
          // logoSrc={Logo}
          backgroundImageSrc={image}
          limitDescription={true}
        />
      ) : null}
      <BenefitsList benefits={benefitsData}/>
      <ActivitySection />
      <CoursePreviewSlick />
      <StatisticsSection2 bgColor="!bg-[#37278E]" statisticsData={statisticsData}/>
      <div onClick={() => window.open("https://onschoolbootcamp.edu.vn", "_blank")} className="w-screen op flex justify-center px-32 py-24 max-md:px-4 max-md:py-12">
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

export const Head: HeadFC = () => <title>Onschool - Bootcamp</title>;
