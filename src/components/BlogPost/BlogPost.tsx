import React from 'react';
import Breadcrumb from './Breadcrumb';
import CategoryLabel from './CategoryLabel';
import AuthorInfo from './AuthorInfo';
import TableOfContents from './TableOfContents';
import ShareSection from './ShareSection';
import { formatDate } from '../../library/formatString';
import 'ckeditor5/ckeditor5-content.css';


interface BlogPostProps {
  category: string;
  title: string;
  author: string;
  publishDate: string;
  content: string;
//   tableOfContents: string[];
  thumbnail:string;
}

const BlogPost: React.FC<BlogPostProps> = ({ category, title, content, author, publishDate }) => {
  return (
    <article className="flex flex-col items-center pt-48 max-md:pt-24 px-4 lg:px-32 py-16 max-md:py-6 bg-white">
      <div className="flex flex-col w-full max-w-[1184px] max-md:max-w-full">
        <Breadcrumb items={['Home', 'Blog', title]} />
        <header className="flex flex-col mt-6 max-md:mt-4 w-full max-md:max-w-full">
          <CategoryLabel category={category} />
          <h1 className="mt-6 max-md:mt-4 text-5xl font-bold tracking-[-0.96px] text-[#3644F5] leading-[125%] max-md:max-w-full max-md:text-2xl">
            {title}
          </h1>
        </header>
        <AuthorInfo author={author} publishDate={formatDate(publishDate)} />
      </div>
      <div className="flex flex-wrap gap-10 items-start my-16 w-full max-w-[1184px] max-md:my-6 max-md:max-w-full">
        <main className="flex flex-col flex-1 shrink w-full">
          <section className="flex flex-col w-full max-md:max-w-full">
            <div className="ck-content relative overflow-hidden px-4" dangerouslySetInnerHTML={{ __html: content }}></div>
          </section>
        </main>
      </div>
      <ShareSection title={title}/>
    </article>
  );
};

export default BlogPost;