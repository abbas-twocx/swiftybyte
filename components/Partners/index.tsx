import React from "react";
import { TBrands } from "@/types/types";
import SectionHeader from "../Common/SectionHeader";
import SingleBrand from "../Brands/SingleBrand";

const Partners: React.FC<TBrands> = ({
  showHeading,
  title,
  subTitle,
  decription,
  brands,
}) => {
  return (
    <>
      <section>
        {showHeading && (
          <SectionHeader
            title={title}
            subtitle={subTitle}
            description={decription}
          />
        )}
        <div className="border border-x-0 border-y-stroke bg-[#F2F4F7] py-11 dark:border-y-strokedark dark:bg-black">
          <div className="container mx-auto px-[30px] py-[24px]">
            <div className="flex flex-wrap items-center justify-center gap-7.5 lg:gap-12.5 xl:gap-29">
              {brands &&
                brands?.map((brand, key) => (
                  <SingleBrand brand={brand} key={key} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
