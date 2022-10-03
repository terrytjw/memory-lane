import Link from "next/link";
import React, { ReactNode } from "react";

type CustomLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};
const CustomLink = ({ children, href, className }: CustomLinkProps) => {
  return (
    <Link href={href}>
      <a className={`hover:text-gray-500 transition-all group ${className}`}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
