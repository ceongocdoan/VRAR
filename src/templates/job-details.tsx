import * as React from "react";
import { Link, type PageProps } from "gatsby";
import Layout from "../components/layout";
import RecruitmentPage from "../components/RecruitmentPage/RecruitmentPage";
import Header from "../components/Header/Header";
import ImportantInfoSection from "../components/ImportantInfoSection/ImportantInfoSection";
import Button from "../components/UI/Button";
import JobSearch from "../components/JobSearch/JobSearch";
import 'ckeditor5/ckeditor5-content.css';


interface JobDetailsContext {
  slug: string;
  title: string;
  quantity: number;
  expiredDate: string;
  location: string[];
  content: string;
  experience: string;
  type: string;
}

const JobDetails: React.FC<PageProps<{}, JobDetailsContext>> = ({
  pageContext,
}) => {
  const {
    title,
    quantity,
    experience,
    type,
    expiredDate,
    content,
    slug,
    location,
  } = pageContext;

  return (
    <Layout>
      <Header />
      <RecruitmentPage jobTitle={title} location={location} url="ung-tuyen/" />
      <ImportantInfoSection
        experience={experience}
        type={type}
        expiredDate={expiredDate}
        location={location}
      />
      <div className="w-full px-32 max-md:px-4 py-16 max-md:py-6">
        <div className="max-w-[1184px] mx-auto">
          <div
            className="ck-content max-w-[800px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Link to={"ung-tuyen/"}>
            <Button
              name="Trải nghiệm ngay"
              size="desktop"
              variant="tertiary"
              classname="mt-16 w-fit"
            />
          </Link>
        </div>
      </div>
      <JobSearch />
    </Layout>
  );
};

export default JobDetails;

export const Head: React.FC<PageProps<{}, JobDetailsContext>> = ({
  pageContext,
}) => <title>Career - {pageContext.title}</title>;
