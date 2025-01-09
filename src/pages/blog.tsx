import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header/Header";
import BlogHeaderHero from "../components/BlogHeaderHero/BlogHeaderHero";
import BlogSection from "../components/BlogSection/BlogSection";
import { useLocation } from "@reach/router"; // import useLocation from @reach/router

const IndexPage: React.FC<PageProps> = () => {
  const location = useLocation(); 
  const [props, setProps] = React.useState("");
  React.useEffect(() => {
    // Lấy giá trị category từ query parameters
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get("category") || ""; // lấy giá trị từ URL query string
    setProps(categoryFromUrl);
  });

  return (
    <Layout>
      <Header />
      <BlogHeaderHero />
      <BlogSection props={props} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool - Career</title>;
