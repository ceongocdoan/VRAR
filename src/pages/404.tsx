
import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/Header/Header";
import image404 from "../assets/images/404/404.svg";
import Button from "../components/UI/UI/Buttons";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <div className="w-full pt-[128px] max-md:pt-[66px]">
        <div className="max-w-[1184px] mx-auto h-[666px] max-md:h-[500px] flex flex-col justify-center items-center gap-12 max-md:px-4">
          <img src={image404} className="max-md:h-[80px]"/>
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-[#4460FF] text-4xl font-bold text-center max-md:text-2xl">
              Oops! Trang này không tồn tại
            </h1>
            <p className="text-xl font-medium text-center max-md:text-base">
              Có thể bạn đã nhập sai địa chỉ hoặc trang đã bị xoá. Đừng lo, hãy
              quay lại để tiếp tục!
            </p>
          </div>
          <Link to="/">
            <Button variant="tertiary">Quay lại trang chủ</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
