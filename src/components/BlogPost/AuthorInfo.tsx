import React from 'react';
import AuthorIcon from '../../assets/icons/blog/user-01.svg';
import CalendarIcon from '../../assets/icons/blog/calendar.svg';

interface AuthorInfoProps {
  author: string;
  publishDate: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author, publishDate }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center px-3 py-6 mt-6 max-md:mt-4 w-full text-sm font-medium leading-5 border-y border-[#D0D5DD] text-[#667085] max-md:max-w-full">
      <div className="flex items-center gap-1 self-stretch my-auto">
        <img src={AuthorIcon} alt={author} className="max-md:hidden" />
        {author}
      </div>
      <div className="flex gap-1 items-center self-stretch my-auto">
        <img src={CalendarIcon} alt={publishDate} className="max-md:hidden" />
        <div className="self-stretch my-auto">Ngày xuất bản:</div>
        <div className="self-stretch my-auto">{publishDate}</div>
      </div>
    </div>
  );
};

export default AuthorInfo;