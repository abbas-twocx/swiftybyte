"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      <section className="overflow-hidden px-4 py-[60px] md:px-8 2xl:px-0">
        <div className="container mx-auto flex min-h-[300px] w-full items-center rounded-lg bg-gradient-to-t from-primary to-[#5199e1] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex w-full flex-wrap items-center justify-center gap-8 md:flex-nowrap md:gap-0 lg:justify-between">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2
                className="mb-4 w-11/12 text-center text-3xl font-bold text-white dark:text-black lg:text-start
              xl:text-sectiontitle4"
              >
                Let’s Transform Together
              </h2>
              <p className="text-center text-white dark:text-black lg:text-start">
                Join us on a journey of innovation and excellence. Reach out to
                see <br></br> how we can achieve great things together.
              </p>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-center">
                {/* <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                /> */}
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-black duration-300 hover:opacity-90 hover:shadow-xl dark:bg-white dark:text-black"
                >
                  Contact
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
