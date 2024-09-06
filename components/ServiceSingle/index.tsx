"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TServiceSingle } from "@/types/types";

const ServiceSingle: React.FC<TServiceSingle> = ({
  heading,
  link,
  description,
  points,
  headingLeft,
  bgColor,
}) => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="flex w-full flex-row items-center justify-between gap-[32px] text-center">
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
            className="flex h-fit flex-1 py-[24px]"
          >
            <div
              className={`${
                headingLeft ? "mr-auto" : "ml-auto"
              } flex max-w-[620px] flex-col justify-center px-[30px] text-start`}
            >
              {description && (
                <p className="mt-[24px] text-[14px] text-waterloo">
                  {description}
                </p>
              )}
              <div className="mt-[24px] grid w-full grid-cols-2 gap-[14px]">
                {points &&
                  points?.map((item) => (
                    <div className="flex items-center gap-[8px]">
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src="/images/icon/checkbox.svg"
                        className="object-contain object-center"
                      />
                      <span className="text-[14px] leading-[120%] text-waterloo">
                        {item.point}
                      </span>
                    </div>
                  ))}
              </div>
              <div className="mt-[32px] flex w-fit items-start justify-start">
                <Link
                  href={link.url}
                  className={`group inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-full ${
                    bgColor ? bgColor : "bg-primary"
                  } px-6 py-3 font-medium text-white duration-300 hover:opacity-90 hover:shadow-xl dark:bg-white dark:text-black`}
                >
                  {link.label}
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="duration-300 ease-in-out group-hover:translate-x-2 dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden duration-300 ease-in-out group-hover:translate-x-2 dark:block"
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
            className={`relative flex max-h-[480px] min-h-[480px] flex-1 items-center justify-center ${
              headingLeft ? "-order-1 rounded-r-full" : "rounded-l-full"
            } ${bgColor ? bgColor : "bg-primary"}`}
          >
            <h3 className="text-hero leading-[120%] text-white">{heading}</h3>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceSingle;
