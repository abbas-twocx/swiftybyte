import { THeading } from "@/types/types";
import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Heading: React.FC<THeading> = ({ heading, link }) => {
  return (
    <>
      <section className="w-full bg-white">
        <div
          className="container mx-auto flex flex-col items-center justify-center gap-[32px] px-[24px] py-[130px] 
        pb-[60px] text-center lg:px-[30px]"
        >
          <h1
            className="max-w-full text-[30px] font-medium leading-[120%] tracking-[-1.28px] text-black dark:text-white 
          lg:max-w-[1080px] lg:text-[58px]"
          >
            {heading || ""}
          </h1>
          {link && (
            <div>
              <CustomLink
                children={link.label || ""}
                url={link.url || "#"}
                type={link.type || "primary"}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Heading;
