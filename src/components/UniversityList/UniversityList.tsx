import React from 'react';
import UniversityItem from './UniversityItem';

const universities = [
  "Trường Đại học Thương Mại",
  "Trường Đại học Kinh tế Quốc dân",
  "Học viện Ngân hàng",
  "Trường Đại học công nghiệp hà nội",
  "Trường Đại học Kinh tế - Kỹ thuật Công nghiệp",
  "Đại học Hà Nội",
  "Trường Đại học chu văn an - eCOUNI",
  "Trường Đại học Kinh tế nghệ an",
  "Trường Đại học Ngoại Thương",
  "Trường Đại học Trà Vinh"
];

const UniversityList: React.FC = () => {
  return (
    <div className='w-screen'>
    <section className="max-w-screen-xl mx-auto flex gap-2 items-center text-xs font-medium text-neutral-800">
      <div className="flex flex-col self-stretch my-auto rounded-none w-[751px] max-md:max-w-full">
        <div className="flex relative flex-col items-end px-20 pt-2.5 pb-14 w-full min-h-[872px] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f17f05833452a1af67df4f381a2f47698b18122492a138a0115cb414d6241553?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" alt="" className="object-cover !absolute inset-0 size-full" />
          {universities.map((university, index) => (
            <React.Fragment key={index}>
              {index === 0 && <UniversityItem name={university} />}
              {index === 1 && <UniversityItem name={university} />}
              {index === 2 && (
                <div className="flex relative z-10 flex-wrap items-start mt-5 w-full max-w-[531px] max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6398f3ab578c4e41e6b520ac4086ccd46970fd764bdaddaccee3092396e38709?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" alt="" className="object-contain z-10 grow shrink-0 self-end mt-2.5 aspect-[13.33] basis-0 w-fit max-md:max-w-full" />
                  <UniversityItem name={university} />
                </div>
              )}
              {index === 3 && (
                <div className="flex relative flex-wrap w-full max-w-[530px] max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd9ad3fd930beb90f4c1766351807532334d97c9563dadccf6e84bd51fcae195?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" alt="" className="object-contain grow shrink-0 self-start aspect-[5.92] basis-0 w-fit" />
                  <div className="flex flex-col">
                    <UniversityItem name={university} />
                    <UniversityItem name={universities[4]} />
                  </div>
                </div>
              )}
              {index === 5 && <UniversityItem name={university} />}
              {index === 6 && (
                <div className="flex relative items-start mt-5 w-full max-w-[542px] max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5db5a4c4131687ecbcf3fc850c222c7bfa62b0ba4a41ea98ce4aaa1b74a53fee?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" alt="" className="object-contain grow shrink-0 aspect-[7.19] basis-0 w-fit" />
                  <div className="flex flex-col">
                    <UniversityItem name={university} />
                    <UniversityItem name={universities[7]} />
                  </div>
                </div>
              )}
              {index === 8 && (
                <div className="flex relative items-start self-center mt-96 ml-9 max-w-full w-[357px] max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa393eaa79c2a3b51a015d9c2d4367fa55d1c5e050a28aa0a4a9fc28ac9aa2d?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" alt="" className="object-contain shrink-0 self-start max-w-full aspect-[6.29] w-[207px]" />
                  <UniversityItem name={university} />
                </div>
              )}
              {index === 9 && (
                <div className="flex relative items-start self-center mt-3.5 max-w-full w-[283px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/637279477e14e329cfbec332e66551d5d69d764891a4f87622573a7fb8e4a6c2?placeholderIfAbsent=true&apiKey=7ca6603eb45445888c22e9631ef00b6e" alt="" className="object-contain shrink-0 max-w-full aspect-[6.62] w-[159px]" />
                  <UniversityItem name={university} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default UniversityList;