"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TAbout } from "@/types/types";

const About: React.FC<TAbout> = ({
  tag,
  heading,
  description,
  image,
  imageRight,
}) => {
  return (
    <>
      <section className="overflow-hidden pb-[0px] lg:pb-25 xl:pb-30">
        <div className="container mx-auto px-[24px] py-[30px] lg:px-[30px] lg:py-[60px]">
          <div className="flex  flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
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
              className={`animate_left relative mx-auto aspect-[588/526.5] w-full rounded-2xl lg:w-1/2 ${
                imageRight ? "order-1" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="rounded-2xl object-cover object-center"
                fill
              />
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
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-primarydark px-4.5 py-1 text-metatitle uppercase text-white ">
                  {tag || ""}
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-[28px] font-bold leading-[120%] text-black dark:text-white lg:text-sectiontitle4">
                {heading || ""}
                {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  SaaS Startup
                </span> */}
              </h2>
              <p className="text-justify lg:text-start">{description || ""}</p>

              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  </h3>
                  <p>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Fully Customizable
                  </h3>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
