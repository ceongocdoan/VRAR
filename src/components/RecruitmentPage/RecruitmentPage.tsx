import React from "react";
import JobDetails from "./JobDetails";
import Button from "../UI/Button";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface RecruitmentPageProps {
  jobTitle: string;
  location: string[];
  url: string;
}

const RecruitmentPage: React.FC<RecruitmentPageProps> = ({
  jobTitle,
  location,
  url
}) => {
  const scrollToApplyForm = () => {
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex relative flex-col items-center px-12 pt-64 pb-12 min-h-[600px] max-md:px-5 max-md:pt-24">
      <StaticImage
        loading="lazy"
        src="../../assets/images/Banner/JDBanner.png"
        alt="Onschool recruitment banner"
        title="Onschool recruitment banner"
        className="object-cover !absolute inset-0 size-full"
      />
      <div className="opacity-65 !absolute bg-gradient-to-b from-black to-black size-full inset-0"></div>
      <section className="flex relative flex-col justify-center w-full max-w-[1184px] max-md:max-w-full">
        <JobDetails jobTitle={jobTitle} location={location} />
        <Link to={url} className="self-center">
          <Button name="Trải nghiệm ngay" variant="secondary" size="desktop" position="self-center" classname="w-fit mt-6"/>
        </Link>
      </section>
    </main>
  );
};

export default RecruitmentPage;
