"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TBrand } from "@/types/types";

const SinglePartner = ({ brand }: { brand: TBrand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <Image
          className="object-contain object-center opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image.src}
          alt={name}
          fill
        />
        <Image
          className="hidden object-contain object-center opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight?.src || ""}
          alt={name}
          fill
        />
      </motion.a>
    </>
  );
};

export default SinglePartner;
