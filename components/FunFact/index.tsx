"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      <section className="px-[24px] py-[30px] lg:px-[30px] lg:py-[60px]">
        <div
          className="container relative z-1 mx-auto rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-[30px] 
        dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark 
        lg:py-22.5 xl:py-27.5"
        >
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Building Partnerships
            </h2>
            <p className="mx-auto max-w-[820px]">
              Since 1999 we have delivered thousands of diverse
              business-critical projects and solutions for our clients. As the
              technology enablement division of MSQ Partners, we have global
              reach creating solutions for our clients wherever they maybe in
              the world. This scale allows us to solve the big challenges that
              our clients face from 3 UK locations in London, Uppingham and
              Leeds, and with teams in India and the US.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top max-w-[230px] text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                5,717%
              </h3>
              <p className="text-[14px]">
                revenue increase in 1 month in online product sales for a
                leading UK transport company
              </p>
            </motion.div>
            <motion.div
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top max-w-[230px] text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                300
              </h3>
              <p className="text-[14px]">
                deployments daily for an industry-leading telecoms company
              </p>
            </motion.div>
            <motion.div
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top max-w-[230px] text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                25
              </h3>
              <p className="text-[16px]">
                key improvements on the existing SAFe implementation for a major
                UK retail company
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
