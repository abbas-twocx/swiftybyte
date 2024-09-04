import React from "react";
import NextLink from "next/link";
import { ILink } from "@/types/link";

interface CustomLinkProps extends ILink {
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  type = "primary",
  loading = false,
  newTab = false,
  url = "#",
}) => {
  const linkClass = [
    "flex overflow-hidden justify-center gap-[10px] items-center relative w-full text-base focus:outline-none leading-[120%] py-[10px] group",
    type === "primary" && !loading
      ? "bg-primary font-normal text-white hover:bg-primaryho hover:shadow-xl duration-500 rounded-md px-[24px]"
      : "",
    type === "secondary" && !loading
      ? "bg-transparent font-normal text-primary hover:text-primaryho duration-500"
      : "",
    loading ? "cursor-not-allowed opacity-50" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <NextLink href={url} legacyBehavior>
      <a
        className={linkClass}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <span className="relative">
          {children}
        </span>
      </a>
    </NextLink>
  );
};

export default CustomLink;
