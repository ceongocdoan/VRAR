import React, { useState } from "react";
import Button from "../UI/UI/Buttons";
import { fetchGraphQLData } from "../../services/graphqlService";
import { navigate } from "gatsby";
import LoadingModal from "../UI/LoadingModal";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State để theo dõi quá trình gửi form

  const isFormValid = fullName.trim() && phoneNumber.trim() && email.trim() && message.trim();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Collect form data
    const formData = {
      fullName,
      phoneNumber,
      email,
      location,
      message,
    };

    // GraphQL mutation để gửi thông tin contact
    const graphqlQuery = {
      query: `
        mutation CreateContact($data: ContactInput!) {
  createContact(data: $data) {
    content
    email
    name
    phone
    address
  }
}
      `,
      variables: {
        data: {
          name: fullName,
          email: email,
          phone: phoneNumber,
          address: location,
          content: message,
        },
      },
    };

    setIsSubmitting(true);

    try {
      const response = await fetchGraphQLData<{ createContact: any }>(
        graphqlQuery
      );

      if (response.errors) {
        console.error("Failed to create contact:", response.errors);
        alert("Đã xảy ra lỗi khi gửi thông tin. Vui lòng thử lại.");
      } else {
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setLocation("");
        setMessage("");
        navigate("/dang-ky-lien-he-thanh-cong")
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Đã xảy ra lỗi khi gửi thông tin. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) return <LoadingModal/>;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-1 shrink  max-md:gap-0 justify-center self-stretch p-6 my-auto bg-white rounded-3xl border-2 border-blue-600 border-solid basis-0 max-w-[700px] min-w-[290px] max-md:px-5 max-md:max-w-full"
    >
      <h3 className="text-4xl font-medium tracking-tight !leading-[40px] max-md:text-3xl text-blue-700 max-md:max-w-full">
        Để lại góp ý tại đây!
      </h3>

      <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <label
            htmlFor="fullName"
            className="gap-2.5 px-5 w-full text-lg font-semibold leading-7 text-slate-700 max-md:max-w-full"
          >
            Họ Và Tên*
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Họ và tên học sinh"
            className="flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base leading-6 text-black rounded-xl border border-gray-300 border-solid max-md:max-w-full"
          />
        </div>

        {/* Các field khác được giữ nguyên */}

        {/* Phone Number Field */}
        <div className="flex flex-col mt-6 w-full max-md:max-w-full">
          <label
            htmlFor="phoneNumber"
            className="gap-2.5 px-5 w-full text-lg font-semibold leading-7 text-slate-700 max-md:max-w-full"
          >
            Số Điện Thoại*
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Nhập số điện thoại của học sinh"
            className="flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base leading-6 text-black rounded-xl border border-gray-300 border-solid max-md:max-w-full"
          />
        </div>
        {/* Email Field */}
        <div className="flex flex-col mt-6 w-full max-md:max-w-full">
          <label
            htmlFor="email"
            className="gap-2.5 px-5 w-full text-lg font-semibold leading-7 whitespace-nowrap text-slate-700 max-md:max-w-full"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập địa chỉ email của học sinh"
            className="flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base leading-6 text-black rounded-xl border border-gray-300 border-solid max-md:max-w-full"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col mt-6 w-full max-md:max-w-full">
          <label
            htmlFor="message"
            className="gap-2.5 px-5 w-full text-lg font-semibold leading-7 text-slate-700 max-md:max-w-full"
          >
            Nội dung liên hệ*
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nhập nội dung"
            className="flex justify-between items-start px-5 py-2.5 mt-1 w-full text-base leading-6 text-black rounded-xl border border-gray-300 border-solid min-h-[44px] max-md:max-w-full"
          ></textarea>
        </div>
        <Button
          type="submit"
          variant="primary"
          disabled={!isFormValid || isSubmitting}
          className="w-fit self-end mt-6"
        >
          {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
        </Button>
      </div>
      {isSubmitting&&<LoadingModal/>}
    </form>
  );
};

export default ContactForm;
