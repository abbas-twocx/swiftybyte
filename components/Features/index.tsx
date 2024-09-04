import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { TServices } from "@/types/types";
import SingleService from "./SingleFeature";

const Services: React.FC<TServices> = ({
  title,
  subTitle,
  description,
  services,
}) => {
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            title={title || ""}
            description={description || ""}
            subtitle={subTitle || ""}
          />

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {services &&
              services?.map((service, key) => (
                <SingleService service={service} key={key} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
