import About from "@/components/About";
import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import TextWithImage from "@/components/TextWithImage";
import { TAbout, THeading, TTextWithImage } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Digital Experience - SwiftyByte",
  description:
    "Explore how SwiftyByte creates digital experiences that enhance your brand and drive conversions. Discover our approach to digital strategy, innovation, and managed services.",
  keywords:
    "digital experience, digital strategy, strategic roadmap, collaborative innovation, managed services, SwiftyByte, user experience, brand enhancement",
  robots: "index, follow",
  metadataBase: new URL('https://www.swiftybyte.com'),
  openGraph: {
    title: "Digital Experience - SwiftyByte",
    description:
      "Explore how SwiftyByte creates digital experiences that enhance your brand and drive conversions. Discover our approach to digital strategy, innovation, and managed services.",
    url: "https://www.swiftybyte.com/services/digital-experience",
    type: "website",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/about/team-discussion.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Experience - SwiftyByte",
      },
    ],
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "Digital Experience - SwiftyByte",
    description:
      "Explore how SwiftyByte creates digital experiences that enhance your brand and drive conversions. Discover our approach to digital strategy, innovation, and managed services.",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/about/team-discussion.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Experience - SwiftyByte",
      },
    ],
  },
};

const headingData = {
  heading: "Digital Experience",
  link: {
    label: "Back to all services",
    type: "primary",
    url: "/services",
  },
} as THeading;

const textWithImageData = {
  heading: "Have you discovered your digital difference?",
  description:
    "SwiftyByte’s experts create digital experiences that make you stand out, enhancing your brand and driving conversions. We know how to uniquely engage customers, driving acquisition, retention and growth. Let us lead you to the right strategy that differentiates your brand and delivers on the promise of being a digital change maker.",
  image: {
    src: "/images/about/team-discussion.jpg",
    alt: "Product Team",
  },
  link: {
    label: "Contact",
    type: "primary",
    url: "/contact",
  },
} as TTextWithImage;

const aboutData1 = {
  tag: "Digital Strategy",
  heading: "Identify your North Star",
  description:
    "Together we create a clear vision for a digital experience that aligns with your business goals; an approach to engaging customers that acts as a North Star to guide your organisation on your journey to digital maturity. SwiftyByte unpacks the complex relationships between business, technology and customer Our experts will identify the state of your digital experience now, then light the way to the next digital-driven growth opportunity. ",
  image: {
    src: "/images/about/illustration-8.png",
    alt: "Product Development",
  },
} as TAbout;

const aboutData2 = {
  tag: "Strategic Roadmap",
  heading: "Navigate to a successful strategy",
  description:
    "With your North Star in our sight, we define your strategy and deliver a roadmap to successfully realise your ambitions. This means understanding your customers, and mapping out a digital experience and a content strategy that’s brought to life by a compelling, user-centred design. SwiftyByte’s experts employ research to inform prototyping, enabling you to validate decisions faster. Our measurement framework continuously tracks success metrics, so we can better manage risks and quantify returns.  We align the strategy with your technical ambition to ensure your goals can be achieved. Your roadmap is designed with future enhancements in mind, so you can upgrade to emerging technologies and a superior digital experience with minimal fuss.",
  image: {
    src: "/images/about/illustration-9.png",
    alt: "Product Optimization",
  },
  imageRight: true,
} as TAbout;

const aboutData3 = {
  tag: "Collaborative Innovation",
  heading: "Build a best-in-class future",
  description:
    "Throughout the process, our technology, product and design teams collaborate with you to build services that connect your brand with your customers - setting you up for a lasting success. We partner with best-in-class digital platform and service providers to power and accelerate your digital vision. Let’s deliver digital change together - collaborating to learn constantly, and optimise the tools that power your digital ecosystem.  The outcome is measurable value for you, and an unmatched digital experience for your customers.",
  image: {
    src: "/images/about/illustration-10.png",
    alt: "Product Transformation",
  },
} as TAbout;

const aboutData4 = {
  tag: "Managed Services",
  heading: "Deliver long-lasting, better outcomes",
  description:
    "SwiftyByte manages ongoing delivery of your services, so security, compliance and resilience is a given. We run the hard yards, leaving you to focus on delivering the digital experience that makes your customers keep coming back for more.",
  image: {
    src: "/images/about/illustration-5.png",
    alt: "Product Transformation",
  },
  imageRight: true,
} as TAbout;

export default function DigitalExperience() {
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
