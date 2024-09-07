import Image from "next/image";
import CustomLink from "../CustomLink/CustomLink";
import { THero } from "@/types/types";

const Hero: React.FC<THero> = ({ heading, description, link, image }) => {
  return (
    <>
      <section className="overflow-hidden pt-[100px]">
        <div className="container relative mx-auto">
          <div
            className="absolute bottom-0 left-0 right-0 z-[-1] h-full max-h-[385px] w-full max-w-full bg-[#E4E9F0] opacity-0 blur-lg 
          filter lg:opacity-100"
          ></div>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="flex flex-1 justify-end">
              <div
                className="z-1 flex h-full max-h-[640px] w-full max-w-[520px] flex-col items-center 
                justify-center gap-[16px] bg-white px-[24px] py-[24px] text-center 
                md:min-h-[500px] lg:min-w-[520px] lg:translate-x-[34px] lg:items-start lg:rounded-bl-[80px] lg:pl-[64px] lg:pr-[24px] 
                lg:text-start xl:min-h-[560px]"
              >
                <h1
                  className="text-3xl font-medium leading-[120%] tracking-[-1.28px] text-black 
                dark:text-white lg:text-[65px] "
                >
                  {heading || ""}
                </h1>
                <p>{description || ""}</p>

                <div className="flex w-fit items-center justify-center lg:items-start lg:justify-start">
                  <CustomLink
                    children={link.children || ""}
                    url={link.url || "#"}
                    type={link.type || "secondary"}
                  />
                </div>
              </div>
            </div>

            <div className="animate_right relative flex min-h-[320px] w-full max-w-[865px] items-center overflow-hidden px-[24px] lg:min-h-[772px] lg:w-[865px] lg:px-0">
              <Image
                className="absolute hidden lg:flex"
                width={776}
                height={644}
                alt=""
                src="/images/hero/hero-shape.svg"
              />
              <Image
                className="h-full max-h-[772px] w-full max-w-[865px] rounded-xl object-cover object-center lg:rounded-none"
                src={image.src || ""}
                alt={image.alt || "Banner"}
                width={865}
                height={772}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
