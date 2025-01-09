import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

interface ActivityCardProps {
  image: IGatsbyImageData;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ image }) => {
  return (
    <article className="p-2 rounded-3xl bg-[#F9FAFB] w-[302px] h-[276px]">
      <GatsbyImage
        image={image}
        alt="Hoạt động tại onschool"
        className="rounded-2xl h-full"
      />
    </article>
  );
};

export default ActivityCard;