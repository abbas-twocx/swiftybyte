import Image from "next/image";
import CustomLink from "../CustomLink/CustomLink";
import { THero } from "@/types/types";

const Hero: React.FC<THero> = ({ heading, description, link, image }) => {
  return (
    <>
      <section className="overflow-hidden pt-[100px]">
        <div className="container relative mx-auto">
          <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full max-h-[385px] w-full max-w-full bg-[#E4E9F0] blur-lg filter"></div>
          <div className="flex items-center justify-between">
            <div className="flex flex-1 justify-end">
              <div
                style={{ borderBottomLeftRadius: 80, borderTopLeftRadius: 80 }}
                className="z-1 flex h-full max-h-[640px] min-w-[520px] max-w-[520px] translate-x-[34px] flex-col justify-center gap-[16px] bg-white py-[24px] pl-[64px] pr-[24p] md:min-h-[500px] xl:min-h-[560px]"
              >
                <h1 className="text-3xl font-medium leading-[120%] tracking-[-1.28px] text-black dark:text-white lg:text-[65px] ">
                  {heading || ""}
                </h1>
                <p>{description || ""}</p>

                <div className="flex w-fit items-start justify-start">
                  <CustomLink
                    children={link.children || ""}
                    url={link.url || "#"}
                    type={link.type || "secondary"}
                  />
                </div>
              </div>
            </div>

            <div className="animate_right relative  flex min-h-[772px] w-[865px] max-w-[865px] items-center">
              <Image
                className="absolute"
                width={776}
                height={644}
                alt=""
                src="/images/hero/hero-shape.svg"
              />
              <Image
                className="h-full max-h-[772px] w-full max-w-[865px] object-cover object-center"
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
