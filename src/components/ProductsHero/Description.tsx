import * as React from "react";

interface DescriptionProps {
  text: string;
  limitDescription: boolean;
}

export function Description({ text, limitDescription }: DescriptionProps) {
  return (
    <p
      className="mt-6 max-md:px-2 text-xl font-medium leading-8 text-white max-md:max-w-full"
      style={{ maxWidth: limitDescription ? '533px' : 'auto' }}
    >
      {text}
    </p>
  );
}