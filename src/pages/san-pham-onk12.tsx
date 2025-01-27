import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { ProductsHero } from "../components/ProductsHero/ProductsHero";
import Logo from "../assets/images/OnschoolEcosystems/Onk12Mono.svg";
import { BenefitsList } from "../components/BenefitsList/BenefitsList";
import { OptimizedProgram } from "../components/OptimizedProgram/OptimizedProgram";
import Header from "../components/Header/Header";
import { getImage } from "gatsby-plugin-image";
import Laptop2 from "../assets/images/BenefitsList/Laptop2.svg"
import StatisticsSection2 from "../components/StatisticsSection2/StatisticsSection2";
import Button from "../components/UI/Button";

const benefitsData = [
  { icon: Laptop2, title: "Phương pháp Edulead", description:"Thầy dạy bằng dẫn dắt - Trò học bằng tư duy." },
  { icon: Laptop2, title: "Thiết kế lớp học phù hợp" , description:"Lớp từ 6-8 học sinh tương tác liên tục qua nền tảng học trực tuyến."},
  { icon: Laptop2, title: "Hỗ trợ học tập ngoài giờ" , description:"Học sinh có thể đặt câu hỏi và nhận giải đáp từ giáo viên hoặc cố vấn học tập với hệ thống trợ giảng online ngoài giờ học chính."},
  { icon: Laptop2, title: "Lộ trình học cá nhân hóa", description:"Phân tích, đưa ra lộ trình học và bài tập phù hợp với  năng lực từng học sinh.",subTitle:"AI Mastery Learing" },
];

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/SkillBanner12.jpg" }
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
    { title:"Đập mỗi giờ để duy trì sự sống", value: "4.800+ lần", description: "" },
    { title:"Máu được bơm qua hệ tuần hoàn mỗi phút", value: "5-6 lít", description: "" },
    { title:"Độ dài mạng lưới mạch máu trong cơ thể",value: "100.000 km", description: "" },
    { title:"Số lần đập trung bình mỗi phút của một trái tim khoẻ mạnh",value: "70-100 nhịp", description: "" },
  ];
  
  return (
    <Layout>
      <Header bgColor="bg-[#DC50F4] bg-opacity-100" />
      {image ? (
        <ProductsHero
          headings={["Mô phỏng phân tích", "bệnh lý tim mạch"]}
          description=""
          logoSrc={Logo}
          backgroundImageSrc={image}
        />
      ) : null}
      <BenefitsList benefits={benefitsData}/>
      <OptimizedProgram />
      <StatisticsSection2 bgColor="!bg-[#DC50F4]" statisticsData={statisticsData}/>
      <div onClick={() => window.open("https://www.onk12.edu.vn", "_blank")} className="w-screen flex justify-center px-32 py-24 max-md:px-4 max-md:py-12">
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
export const Head: HeadFC = () => <title>Onschool - OnK12</title>;

