import About from "@/components/About";
import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import TextWithImage from "@/components/TextWithImage";
import { TAbout, THeading, TTextWithImage } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Digital Transformation - SwiftyByte",
  description:
    "Explore how SwiftyByte drives digital transformation for organizations. Learn about enhancing digital delivery, tech modernization, specialist expertise, and infrastructure modernization.",
  keywords:
    "digital transformation, tech modernization, digital maturity, DevOps, cloud migration, infrastructure modernization, SwiftyByte, digital services",
  robots: "index, follow",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}`),
  openGraph: {
    title: "Digital Transformation - SwiftyByte",
    description:
      "Explore how SwiftyByte drives digital transformation for organizations. Learn about enhancing digital delivery, tech modernization, specialist expertise, and infrastructure modernization.",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}/services/digital-transformation`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}/images/about/team.jpg`,
        width: 1200,
        height: 630,
        alt: "Digital Transformation - SwiftyByte",
      },
    ],
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "Digital Transformation - SwiftyByte",
    description:
      "Explore how SwiftyByte drives digital transformation for organizations. Learn about enhancing digital delivery, tech modernization, specialist expertise, and infrastructure modernization.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}/images/about/team.jpg`,
        width: 1200,
        height: 630,
        alt: "Digital Transformation - SwiftyByte",
      },
    ],
  },
};

const headingData = {
  heading: "Digital Transformation",
  link: {
    label: "Back to all services",
    type: "primary",
    url: "/services",
  },
} as THeading;

const textWithImageData = {
  heading: "Create change to rapidly deliver value",
  description:
    "We help your organisation to transform digitally. We partner with you to create change and deliver value that matches your broader organisational goals. Our strategic approach, clear frameworks and skilled people help you to stay flexible, embrace innovation faster and ultimately transform your digital operations.",
  image: {
    src: "/images/about/team.jpg",
    alt: "Product Team",
  },
  link: {
    label: "Contact",
    type: "primary",
    url: "/contact",
  },
} as TTextWithImage;

const aboutData1 = {
  tag: "Digital Maturity",
  heading: "Digital operating model – enhance digital delivery and capability",
  description:
    "Our cutting-edge frameworks provide a unique blend of delivery principles and extensive experience, helping you achieve digital maturity at an accelerated pace. We assess your current model, understand your challenges, and establish a target operating model with baseline KPIs focused on key areas of improvement. Our roadmap for change, and hands-on implementation leadership, paves the way for improved efficiency, speed, and value to your business and customers. Partner with us and unlock your organization's full potential.",
  image: {
    src: "/images/about/illustration-4.png",
    alt: "Product Development",
  },
} as TAbout;

const aboutData2 = {
  tag: "Tech Modernization",
  heading: "Tech modernisation – upgrade or replace your legacy technology",
  description:
    "At SwiftyByte, we review your digital ecosystem and the technologies used across your platform to establish a roadmap towards engineering excellence. Our hands-on implementation and rollout of new technologies and improved processes drive efficiency gains and an enhanced customer experience. With the implementation of a design system and component framework, we enable interoperability between modern and legacy systems, resulting in an increased digital maturity and engineering capability. Improving architecture and infrastructure to be  more composable, enables business agility.",
  image: {
    src: "/images/about/illustration-5.png",
    alt: "Product Optimization",
  },
  imageRight: true,
} as TAbout;

const aboutData3 = {
  tag: "Specialist Expertise",
  heading: "Specialist teams - unlock your organisations potential",
  description:
    "Our experienced Strategists, Project Managers, Engineers, Cloud, and DevOps specialists help organisations overcome their toughest digital challenges. Our specialists lead our teams, or partner with yours, to deliver significant change and drive program and project success, upskilling your in-house talent in the process. We provide specialist capabilities to accelerate delivery, filling gaps in skill sets or capacity. The result is faster time-to-market and the achievement of outcomes that would otherwise be out of reach. ",
  image: {
    src: "/images/about/illustration-6.png",
    alt: "Product Transformation",
  },
} as TAbout;

const aboutData4 = {
  tag: "Infrastructure Modernization",
  heading:
    "DevOps, cloud and data migration – transform your digital infrastructure ",
  description:
    "Our DevOps team has the tools and best practices you need to modernise your digital infrastructure. Our Cloud Systems Engineers are highly experienced in developing, operating, and maintaining cloud computing systems and solutions for modern, connected organizations. Our data migration capabilities ensure that your data remains secure, connected, and manageable. Together, these capabilities ensure that you remain on the path of continuous improvement and innovation needed to thrive in today's digital-first culture. We begin by understanding your current infrastructure and management processes, then identify a roadmap for migration or modernisation. Our team leads the implementation of these changes, creating infrastructure as code, implementing auto-scaling to support high peaks of traffic, and improving observability to provide a single view of your cloud estate. The result is improved performance, resilience, and scalability, with reduced costs, fragility, lead times, and manual management.",
  image: {
    src: "/images/about/illustration-7.png",
    alt: "Product Transformation",
  },
  imageRight: true,
} as TAbout;

export default function DigitalTransformation() {
  return (
    <main>
      <Heading {...headingData} />
      <TextWithImage {...textWithImageData} />
      <About {...aboutData1} />
      <About {...aboutData2} />
      <About {...aboutData3} />
      <About {...aboutData4} />
      <CTA />
    </main>
  );
}
