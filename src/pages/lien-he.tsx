import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import ContactSection from "../components/ContactSection/ContactSection";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <Header/>
        <div className="pt-32 max-md:pt-16 bg-[#F4F8FF]">

      <ContactSection/>
        </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Liên hệ</title>;

