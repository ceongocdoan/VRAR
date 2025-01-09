import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { SuccessPage } from "../components/SuccessPage/SuccessPage";
import Header from "../components/Header/Header";

const IndexPage: React.FC<PageProps> = () => {
  const successData = {
    title: 'QUÉT THÀNH CÔNG!',
    description: 'Onschool cảm ơn bạn đã liên hệ. Chúng tôi sẽ gửi thông tin của bạn tới bộ phận liên quan và liên hệ bạn trong thời gian sớm nhất'
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

