import React, { useState } from "react";
import axios from "axios";

export async function uploadCV(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("files", file);

  try {
    const response = await axios.post(
      `${process.env.GATSBY_API_URL}/api/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_STRAPI_TOKEN}`,
        },
      }
    );

    // Trả về URL của file đầu tiên vừa upload
    return response.data[0]?.url || null;
  } catch (error) {
    console.error("Error uploading CV:", error);
    return null;
  }
}

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
  name: string;
  link: string;
  phone: string;
  email: string;
  cv: File | null;
}

export async function handleApplicationSubmission(
  applicationData: CompleteApplicationData
): Promise<void> {
  if (applicationData.cv) {
    // Bước 1: Upload file CV và lấy URL
    const cvUrl = await uploadCV(applicationData.cv);

    if (cvUrl) {
      // Bước 2: Tạo application với thông tin và URL CV đã upload
      const application = await createApplication({
        name: applicationData.name,
        link: applicationData.link,
        phone: applicationData.phone,
        email: applicationData.email,
        cvUrl: `${process.env.GATSBY_API_URL}/${cvUrl.replace(/^\/+/, "")}`, // Truyền URL CV vào
      });

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

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    phone: "",
    email: "",
  });
  const [cv, setCv] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCv(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await handleApplicationSubmission({ ...formData, cv });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} required />
      <input type="text" name="link" onChange={handleChange} />
      <input type="text" name="phone" onChange={handleChange} required />
      <input type="email" name="email" onChange={handleChange} required />
      <input type="file" onChange={handleFileChange} accept=".pdf,.jpg,.png" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicationForm;
