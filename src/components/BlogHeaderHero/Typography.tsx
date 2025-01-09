import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'body';
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={className}>{children}</h1>;
    case 'body':
      return <p className={className}>{children}</p>;
    default:
      return <span className={className}>{children}</span>;
  }
};

export default Typography;