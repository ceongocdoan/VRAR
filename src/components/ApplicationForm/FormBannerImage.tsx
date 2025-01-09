import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface FormBannerImageProps {
    title: string;
}

const FormBannerImage: React.FC<FormBannerImageProps> = ({ title }) => {
    return (
        <section className="relative max-lg:hidden w-[calc(50%-24px)]">
            <StaticImage
                src="../../assets/images/Banner/JobApplyImage.jpeg"
                alt={`Ứng tuyển vị trí ${title}`}
                className="h-full"
            />
            <div
                className="absolute inset-0 size-full mix-blend-multiply"
                style={{
                    background: 'linear-gradient(0deg, var(--Primary-RibbonBlue-300, #9CBBFF) 0%, var(--Primary-RibbonBlue-300, #9CBBFF) 100%)',
                    backgroundBlendMode: 'plus-darker'
                }}
            />
        </section>
    )
}

export default FormBannerImage;
