import * as React from "react";
import {
  graphql,
  Link,
  useStaticQuery,
  type HeadFC,
  type PageProps,
} from "gatsby";
import Layout from "../components/layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import MissionSection from "../components/MissonSection/MissionSection";
import StatisticsSection from "../components/StatisticsSection/StatisticsSection";
// import PartnerSection from "../components/PartnerSection/PartnerSection";
import OnschoolCulture from "../components/OnschoolCulture/OnschoolCulture";
import { OnschoolAsk } from "../components/OnschoolAsk/OnschoolAsk";
// import OnschoolActivities from "../components/OnschoolActivities/OnschoolActivities";
// import RelatedPost from "../components/RelatedPostSlick/RelatedPost";
import { getImage } from "gatsby-plugin-image";
import Header from "../components/Header/Header";
import ProductsHomeSection from "../components/ProductsHomeSection/ProductsHomeSection";
import Button from "../components/UI/Button";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/Banner/HomeBanner.jpeg" }
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
      <Header />
      {image ? (
        <HomeBanner
          backgroundImageSrc={image}
          title1="Thực tại ảo"
          title2="Thực tại tăng cường"
        />
      ) : null}
      <MissionSection />
      <ProductsHomeSection />
      <StatisticsSection />
      
      <OnschoolCulture />
      <OnschoolAsk />
      <div className="w-full px-32 py-16 max-md:px-4 max-md:py-6  bg-[#3644F5]">
        <section className=" max-w-[1184px] mx-auto flex justify-between items-center">
          <div className="flex flex-wrap items-center justify-center self-stretch my-auto min-w-[240px] w-[1184px] max-md:gap-4">
            <header className="flex flex-col flex-1 shrink self-stretch my-auto text-4xl max-md:text-2xl max-md:text-center font-bold tracking-tighter leading-10 text-white basis-0 min-w-[240px] max-md:max-w-full">
              <h2>Học cùng mô phỏng</h2>
              <p className="mt-1.5 max-md:max-w-full">bạn đã sẵn sàng?</p>
            </header>
            <Link to="/career" className="max-md:w-full">
              <Button
                name="Trải nghiệm ngay"
                size="desktop"
                variant="secondary"
                position="self-center"
                classname="max-md:w-full max-md:justify-between max-md:max-h-[36px]"
              />
            </Link>
          </div>
        </section>
      </div>
      {/* <RelatedPost /> */}
     
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool</title>;
