import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { SuccessPage } from "../components/SuccessPage/SuccessPage";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  const successData = {
    title: 'NỘP ĐƠN ỨNG TUYỂN THÀNH CÔNG!',
    description: 'Onschool cảm ơn bạn đã quan tâm và gửi hồ sơ ứng tuyển. Chúng tôi sẽ liên hệ với bạn trong vòng 3 ngày tới để thông báo kết quả.'
  }
  return (
    <Layout>
      <Header/>
      <SuccessPage {...successData} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Onschool</title>;

