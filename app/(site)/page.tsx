import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import { THero, TServices } from "@/types/types";
import Services from "@/components/Features";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
};

const heroData = {
  heading: "We are the digital change makers",
  description: "",
  image: {
    src: "/images/hero/hero-banner.png",
    alt: "Hero Banner",
  },
  link: {
    children: "Our services",
    type: "secondary",
    url: "/services",
  },
} as THero;

const servicesData = {
  title: "OUR SERVICES",
  subTitle: "Comprehensive solutions for your needs",
  description:
    "Explore our range of services designed to meet your needs efficiently and effectively. From rapid collection and organization to ongoing support, we ensure you stay engaged and enjoy the process.",
  services: [
    {
      id: 1,
      title: "Digital Experience",
      description:
        "Our experts create digital experiences that make you stand out, enhancing your brand and driving conversions. We know how to uniquely engage customers, driving acquisition, retention and growth.",
      icon: {
        src: "/images/icon/icon-01.svg",
        alt: "Digital Experience",
      },
    },
    {
      id: 1,
      title: "Digital Experience",
      description:
        "Our experts create digital experiences that make you stand out, enhancing your brand and driving conversions. We know how to uniquely engage customers, driving acquisition, retention and growth.",
      icon: {
        src: "/images/icon/icon-02.svg",
        alt: "Digital Experience",
      },
    },
    {
      id: 1,
      title: "Digital Experience",
      description:
        "Our experts create digital experiences that make you stand out, enhancing your brand and driving conversions. We know how to uniquely engage customers, driving acquisition, retention and growth.",
      icon: {
        src: "/images/icon/icon-03.svg",
        alt: "Digital Experience",
      },
    },
  ],
} as TServices;

export default function Home() {
  return (
    <main>
      <Hero {...heroData} />
      <Brands />
      <Services {...servicesData} />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
