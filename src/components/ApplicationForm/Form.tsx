import React, { useState } from "react";
import FormInputField from "./FormInputField";
import Button from "../UI/UI/Buttons";
import FormInputUpload from "./FormInputUpload";
import axios from "axios";
import { navigate } from "gatsby";
import LoadingModal from "../UI/LoadingModal";

interface ApplicationData {
  name: string;
  link: string;
  phone: string;
  email: string;
  cvUrl: string;
}

export async function createApplication(
  applicationData: ApplicationData
): Promise<{ id: number } | null> {
  try {
    const response = await axios.post(
      `${process.env.GATSBY_API_URL}/api/applications`,
      {
        data: applicationData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error creating application:", error);
    return null;
  }
}

interface CompleteApplicationData {
  position: string;
  name: string;
  link: string;
  phone: string;
  email: string;
  cvUrl: string;
}

export async function handleApplicationSubmission(
  applicationData: CompleteApplicationData
): Promise<void> {
  if (applicationData.cvUrl) {
    if (applicationData.cvUrl) {
      // Bước 2: Tạo application với thông tin và URL CV đã upload
      const application = await createApplication({ ...applicationData });

      if (application) {
        console.log("Application created successfully with CV URL.");
      } else {
        console.error("Failed to create application.");
      }
    } else {
      console.error("Failed to upload CV.");
    }
  } else {
    console.error("CV file is required.");
  }
}

interface ApplicatioSubmitFormProps {
  title: string;
}

const ApplicatioSubmitForm: React.FC<ApplicatioSubmitFormProps> = ({title}) => {
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    position: title,
    name: "",
    link: "",
    phone: "",
    email: "",
    cvUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUploaded = (fileLink: string) => {
    setFormData({ ...formData, cvUrl: fileLink });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (pending) return;
    setPending(true);

    try {
      await handleApplicationSubmission(formData);
      navigate("/ung-tuyen-thanh-cong");
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.phone &&
      formData.email &&
      ((formData.link && formData.link.startsWith("http://")) ||
        formData.link.startsWith("https://") ||
        (formData.cvUrl && formData.cvUrl.startsWith("http://")) ||
        formData.cvUrl.startsWith("https://"))
    );
  };

  console.log(title)

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-6 max-md:max-w-full rounded-[36px] shadow-xl border-2 border-[#3644F5]"
    >
      <FormInputField
        label="Họ và tên*"
        placeholder="Nhập họ và tên của bạn"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormInputField
        label="Số điện thoại*"
        placeholder="Nhập số điện thoại của bạn"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormInputField
        label="Địa chỉ email*"
        placeholder="Nhập địa chỉ email của bạn"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInputUpload onUploaded={handleUploaded} />
      <FormInputField
        label="Đường liên kết"
        placeholder="Gắn đường liên kết đến thư mục/tệp của bạn"
        name="link"
        value={formData.link}
        onChange={handleChange}
      />
      {!isFormValid() && (
        <Button type="button" className="xl:self-end" disabled>
          Nộp đơn ứng tuyển
        </Button>
      )}
      {isFormValid() && (
        <Button type="button" className="xl:self-end" onClick={handleSubmit}>
          Nộp đơn ứng tuyển
        </Button>
      )}
      {pending && <LoadingModal />}
    </form>
  );
};

export default ApplicatioSubmitForm;
