import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { CareerHero } from "../components/CareerHero/CareerHero";
import JobSearch from "../components/JobSearch/JobSearch";
import OnschoolCulture from "../components/OnschoolCulture/OnschoolCulture";
import { OnschoolAsk } from "../components/OnschoolAsk/OnschoolAsk";
// import OnschoolActivities from "../components/OnschoolActivities/OnschoolActivities";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <CareerHero />
      <OnschoolCulture />
      <OnschoolAsk />
      <JobSearch />
      {/* <OnschoolActivities /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool - Career</title>;
