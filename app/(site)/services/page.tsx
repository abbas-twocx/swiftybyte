import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import ServiceSingle from "@/components/ServiceSingle";
import Spacer from "@/components/Spacer";
import { THeading, TServiceSingle } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services - SwiftyByte",
  description:
    "Explore SwiftyByte's comprehensive services that define digital experiences, enhance digital products, and drive digital transformation. Discover how we can help you achieve your digital goals.",
  keywords:
    "digital services, digital experience, digital products, digital transformation, SwiftyByte, technology solutions, service offerings",
  robots: "index, follow",
  openGraph: {
    title: "Our Services - SwiftyByte",
    description:
      "Explore SwiftyByte's comprehensive services that define digital experiences, enhance digital products, and drive digital transformation. Discover how we can help you achieve your digital goals.",
    url: "https://www.swiftybyte.com/services",
    type: "website",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/hero/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Our Services - SwiftyByte",
      },
    ],
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "Our Services - SwiftyByte",
    description:
      "Explore SwiftyByte's comprehensive services that define digital experiences, enhance digital products, and drive digital transformation. Discover how we can help you achieve your digital goals.",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/hero/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Our Services - SwiftyByte",
      },
    ],
  },
};

const headingData = {
  heading: "Defining your digital future",
  link: {
    label: "Contact",
    type: "primary",
    url: "/contact",
  },
} as THeading;

const servicesData = {
  heading: "Digital Experience",
  description:
    "MMT’s experts create digital experiences that stand out, enhancing your brand and driving conversions. Our DX designers know how to uniquely engage customers, driving acquisition, retention and growth. Let us lead you to the right strategy that differentiates your brand and delivers on the promise of being a digital change maker.",
  link: {
    label: "Find out more",
    type: "primary",
    url: "/services/digital-experience",
  },
  points: [
    {
      point: "Brand enhancement",
    },
    {
      point: "Optimised DCX",
    },
    {
      point: "Improved conversions",
    },
    {
      point: "Universal accessibility",
    },
  ],
} as TServiceSingle;

const servicesData2 = {
  heading: "Digital Products",
  description:
    "When your digital product is a core part of your business it needs to deliver a first-class experience for all of your users. That can mean going on a journey from an exciting concept to a scalable new digital product, refining and enhancing your current product set or instilling a lean approach into your teams that will turbo-charge delivery. MMT works hand-in-glove with organisations to set strategy and instil the right skills and processes in your team so you can bring game-changing digital products to market.",
  link: {
    label: "Find out more",
    type: "primary",
    url: "/services/digital-products",
  },
  points: [
    {
      point: "Web engineering excellence",
    },
    {
      point: "Emerging technology",
    },
    {
      point: "Desktop and mobile",
    },
    {
      point: "Digital sustainability",
    },
  ],
  headingLeft: true,
  bgColor: "bg-[#0F3B68]",
} as TServiceSingle;

const servicesData3 = {
  heading: "Digital Transformation",
  description:
    "We help your organisation to transform digitally. MMT partners with you to create change and deliver value that matches your broader organisational goals. Our strategic approach, clear frameworks and skilled people help you to stay flexible, embrace innovation faster and ultimately transform your digital operations.  ",
  link: {
    label: "Find out more",
    type: "primary",
    url: "/services/digital-transformation",
  },
  points: [
    {
      point: "Innovation",
    },
    {
      point: "Digital maturity",
    },
    {
      point: "Return on investment",
    },
    {
      point: "Continuous improvement",
    },
  ],
  bgColor: "bg-[#5199e1]",
} as TServiceSingle;

export default function Services() {
  return (
    <main>
      <Heading {...headingData} />
      <ServiceSingle {...servicesData} />
      <Spacer />
      <Spacer />
      <ServiceSingle {...servicesData2} />
      <Spacer />
      <Spacer />
      <ServiceSingle {...servicesData3} />
      <Spacer />
      <Spacer />
      <CTA />
    </main>
  );
}
