import * as React from "react";

interface TypographyProps {
  text: string;
}

export function Typography({ text }: TypographyProps) {
  return (
    <h2 className="px-2 mt-1 w-full max-md:max-w-full max-md:text-4xl">
      {text}
    </h2>
  );
}