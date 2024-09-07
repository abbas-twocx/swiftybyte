"use client";

import React from "react";
import { TTextWithImage } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TextWithImage: React.FC<TTextWithImage> = ({
  heading,
  link,
  image,
  description,
}) => {
  return (
    <>
      <section className="w-full bg-white pb-[30px] lg:pb-0">
        <div className="flex w-full flex-col items-center justify-between text-center lg:flex-row">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-red flex h-fit flex-1 bg-gradient-to-t from-primary to-[#5199e1] py-[60px] 
            shadow-2xl lg:min-h-[460px] lg:rounded-r-full lg:py-[100px]"
          >
            <div
              className="ml-auto flex max-w-full flex-col items-center justify-center pl-[24px] pr-[24px] text-center lg:max-w-[620px] lg:items-start 
            lg:pl-[30px] lg:pr-0 lg:text-start"
            >
              {heading && (
                <h4
                  className="max-w-full text-[24px] font-medium leading-[130%] tracking-[-1.28px] text-white lg:max-w-[1080px] 
                lg:pr-[46px] lg:text-[32px]"
                >
                  {heading}
                </h4>
              )}
              {description && (
                <p className="mt-[24px] text-[14px] text-white lg:mr-[34px]">
                  {description}
                </p>
              )}
              <div className="mt-[32px] flex w-fit items-center justify-center lg:items-start lg:justify-start">
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
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative max-h-[320px] min-h-[320px] w-full max-w-[380px] flex-1 rounded-xl px-[24px]
            lg:max-h-[680px] lg:min-h-[680px] lg:max-w-full lg:rounded-[450px] lg:px-[0px]"
          >
            <Image
              className="mt-[32px] rounded-xl object-cover object-center lg:mt-[0px] lg:rounded-l-full"
              src={image.src}
              alt={image.alt}
              fill
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TextWithImage;
