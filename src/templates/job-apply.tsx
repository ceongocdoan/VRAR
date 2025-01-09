import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/layout";
import RecruitmentPage from "../components/RecruitmentPage/RecruitmentPage";
import Header from "../components/Header/Header";
import ImportantInfoSection from "../components/ImportantInfoSection/ImportantInfoSection";

import ApplicationForm from "../components/ApplicationForm/ApplicationForm";

interface JobDetailsContext {
  title: string;
  quantity: number;
  expiredDate: string;
  location: string[];
  experience: string;
  type: string;
}

const JobDetails: React.FC<PageProps<{}, JobDetailsContext>> = ({ pageContext }) => {
  const { title, quantity,experience, expiredDate,type, location } = pageContext;

  return (
    <Layout>
        <Header/>
        <RecruitmentPage jobTitle={title} location={location} url="#applyForm" />
        <ImportantInfoSection experience={experience} type={type} expiredDate={expiredDate} location={location}/>
        <ApplicationForm title={title} />
    </Layout>
  );
};

export default JobDetails;

export const Head: React.FC<PageProps<{}, JobDetailsContext>> = ({ pageContext }) => (
  <title>Học ngay - {pageContext.title}</title>
);
