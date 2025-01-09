import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import React from "react";

interface BackgroundImageProps {
  src: IGatsbyImageData;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src }) => {

  return src?(
    <GatsbyImage
      image={src}
      title="Onschool banner"
      alt="Onschool banner"
      className="object-cover !absolute inset-0 size-full"
    />
  ):null;
};

export default BackgroundImage;
