import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { TTextWithImage } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const TextWithImage: React.FC<TTextWithImage> = ({ heading, link, image }) => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="flex w-full flex-row items-center justify-between text-center">
          <div className="bg-red flex h-fit min-h-[460px] flex-1 rounded-r-full bg-primary shadow-2xl">
            <div className="ml-auto flex max-w-[620px] flex-col justify-center pl-[30px] text-start">
              <h4 className="max-w-[1080px] pr-[46px] text-3xl font-medium leading-[130%] tracking-[-1.28px] text-white lg:text-[32px]">
                {heading || ""}
              </h4>
              <div className="mt-[32px] flex w-fit items-start justify-start">
                <Link
                  href={link.url}
                  className="group inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-black duration-300 hover:opacity-90 hover:shadow-xl dark:bg-white dark:text-black"
                >
                  {link.label}
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="invert duration-300 ease-in-out group-hover:translate-x-2 dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden invert duration-300 ease-in-out group-hover:translate-x-2 dark:block"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative max-h-[680px] min-h-[680px] flex-1 rounded-[450px]">
            <Image
              className="rounded-l-full object-cover object-center"
              src={image.src}
              alt={image.alt}
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TextWithImage;
