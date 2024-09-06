import About from "@/components/About";
import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import TextWithImage from "@/components/TextWithImage";
import { TAbout, THeading, TTextWithImage } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Digital Products - SwiftyByte",
  description:
    "Discover how SwiftyByte enhances digital products. Learn about product development, optimization, and transformation strategies to create scalable, high-performing products.",
  keywords:
    "digital products, product development, product optimization, product transformation, SwiftyByte, product strategy, user experience",
  robots: "index, follow",
  openGraph: {
    title: "Digital Products - SwiftyByte",
    description:
      "Discover how SwiftyByte enhances digital products. Learn about product development, optimization, and transformation strategies to create scalable, high-performing products.",
    url: "https://www.swiftybyte.com/services/digital-products",
    type: "website",
    images: {
      url: "https://swiftybyte.vercel.app/images/about/product-team.jpg",
      width: 1200,
      height: 630,
      alt: "Digital Products - SwiftyByte",
    },
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "Digital Products - SwiftyByte",
    description:
      "Discover how SwiftyByte enhances digital products. Learn about product development, optimization, and transformation strategies to create scalable, high-performing products.",
    images: {
      url: "https://swiftybyte.vercel.app/images/about/product-team.jpg",
      width: 1200,
      height: 630,
      alt: "Digital Products - SwiftyByte",
    },
  },
};

const headingData = {
  heading: "Digital Products",
  link: {
    label: "Back to all services",
    type: "primary",
    url: "/services",
  },
} as THeading;

const textWithImageData = {
  heading: "Set up your product team to succeed",
  description:
    "When your digital product is a core part of your business it needs to deliver a first-class experience for all of your users. That can mean going on a journey from an exciting concept to a scalable new digital product, refining and enhancing your current product set or instilling a lean approach into your teams that will turbo-charge delivery. SwiftyByte works hand-in-glove with organisations to set strategy and instil the right skills and processes in your team so you can bring game-changing digital products to market.",
  image: {
    src: "/images/about/product-team.jpg",
    alt: "Product Team",
  },
  link: {
    label: "Contact",
    type: "primary",
    url: "/contact",
  },
} as TTextWithImage;

const aboutData1 = {
  tag: "Product Development",
  heading: "Create scalable digital products",
  description:
    "We help you develop a truly customer-centric vision for your new product. Building on years of expertise, our expert teams utilise user research to define the right customer journeys and establish a design language, technical strategy and a feature roadmap to fully scope your product release. Our product specialists and engineers build, test and iterate according to the product roadmap with a view of delivering value early and often. We create secure, scalable and robust products that enable a rapid launch into the market, and offer a foundation to build upon for the future. ",
  image: {
    src: "/images/about/illustration-1.png",
    alt: "Product Development",
  },
} as TAbout;
const aboutData2 = {
  tag: "Product Optimization",
  heading: "Revolutionise your product",
  description:
    "Our experts work with you to analyse your current customer experience and engagement with the product. We then provide tailored recommendations for enhancements that align with your business objectives. From user experience to infrastructure, security to scalability, we cover all the angles to optimise your digital product. The results are high-performing products that exceed business goals and deliver an exceptional customer experience. Enjoy increased customer satisfaction, engagement, and a product built for continuous development to meet evolving customer needs.  ",
  image: {
    src: "/images/about/illustration-2.png",
    alt: "Product Optimization",
  },
  imageRight: true,
} as TAbout;
const aboutData3 = {
  tag: "Product Transformation",
  heading: "Transform your business with the product mindset",
  description:
    "We work with you to bring your business and product vision into alignment, elevating your approach from business-as-usual to a product-focused strategy. Our experts coach your teams on methodologies like SAFe and SCRUM, optimising value delivery, reducing waste, and driving continuous improvement. We provide enterprise-scale product thinking, connecting your strategy and execution with lean portfolio management, which results in enhanced efficiency, superior business outcomes, faster time-to-market, and an improved organisational alignment.",
  image: {
    src: "/images/about/illustration-3.png",
    alt: "Product Transformation",
  },
} as TAbout;

export default function DigitalProducts() {
  return (
    <main>
      <Heading {...headingData} />
      <TextWithImage {...textWithImageData} />
      <About {...aboutData1} />
      <About {...aboutData2} />
      <About {...aboutData3} />
      <CTA />
    </main>
  );
}
