"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TService } from "@/types/types";

const SingleService = ({ service }: { service: TService }) => {
  const { icon, title, description } = service;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top border-primary/55 group relative z-40 cursor-pointer overflow-hidden rounded-lg border bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-[180px] w-[180px] items-center justify-center rounded-[4px]">
          <Image
            className="duration-500 ease-in-out group-hover:brightness-200"
            src={icon.src}
            width={180}
            height={180}
            alt={icon.alt}
          />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black duration-500 ease-in-out group-hover:text-white dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="duration-500 ease-in-out group-hover:text-white">
          {description}
        </p>
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-0 w-full bg-gradient-to-t from-primary to-primaryho/65 duration-500 ease-in-out group-hover:h-full"></div>
      </motion.div>
    </>
  );
};

export default SingleService;
