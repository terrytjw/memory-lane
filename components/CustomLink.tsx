import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  children: string;
  href: string;
  className?: string;
};
const CustomLink = ({ children, href, className }: CustomLinkProps) => {
  return (
    <Link href={href}>
      <a className={`hover:text-gray-500 ease-in duration-300 ${className}`}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
