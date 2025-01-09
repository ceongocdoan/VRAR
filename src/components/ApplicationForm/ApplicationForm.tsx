import React from "react";
import FormBannerImage from "./FormBannerImage";
import ApplicatioSubmitForm from "./Form";

interface ApplicationFormProps {
  title: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ title }) => {
  return (
    <div className="w-full px-32 max-md:px-4 max-md:py-6 ">
      <main
        className="w-full max-w-[1184px] flex gap-12 mx-auto"
        id="applyForm"
      >
        <section className="flex flex-col gap-6 flex-1 shrink lg:py-16 my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <h1 className="flex text-[#475467] lg:text-[#344054] text-2xl lg:text-5xl lg:leading-[125%] lg:tracking-[-0.96px] font-bold">
            Điền thông tin
            <br className="max-lg:hidden" /> để ứng tuyển
          </h1>
          <ApplicatioSubmitForm title={title}/>
        </section>
        <FormBannerImage title={title} />
      </main>
    </div>
  );
};

export default ApplicationForm;
