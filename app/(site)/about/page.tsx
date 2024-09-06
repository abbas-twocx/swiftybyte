import CTA from "@/components/CTA";
import Services from "@/components/Features";
import FunFact from "@/components/FunFact";
import Heading from "@/components/Heading";
import Partners from "@/components/Partners";
import TextWithImage from "@/components/TextWithImage";
import { TBrands, THeading, TServices, TTextWithImage } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - SwiftyByte",
  description:
    "Discover how SwiftyByte partners with organizations to enhance and transform their digital capabilities. Explore our services and the impact we make.",
  keywords:
    "digital transformation, technology solutions, digital experience, product development, innovation, tech partnerships, digital strategy, SwiftyByte",
  robots: "index, follow",
  openGraph: {
    title: "About Us - SwiftyByte",
    description:
      "Discover how SwiftyByte partners with organizations to enhance and transform their digital capabilities. Explore our services and the impact we make.",
    url: "https://www.swiftybyte.com/about",
    type: "website",
    images: "/images/about/about-banner.jpg",
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "About Us - SwiftyByte",
    description:
      "Discover how SwiftyByte partners with organizations to enhance and transform their digital capabilities. Explore our services and the impact we make.",
    images: "/images/about/about-banner.jpg",
  },
};

const partnersData = {
  showHeading: false,
  brands: [
    {
      id: 0.25,
      name: "AWS",
      href: "#",
      image: {
        src: "/images/partners/aws-logo.png",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/partners/aws-logo.png",
        alt: "Brand",
      },
    },
    {
      id: 0.3,
      name: "Client",
      href: "#",
      image: {
        src: "/images/partners/figma-logo.png",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/partners/figma-logo.png",
        alt: "Brand",
      },
    },
    {
      id: 0.4,
      name: "Client",
      href: "#",
      image: {
        src: "/images/partners/microsoft-logo.png",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/partners/microsoft-logo.png",
        alt: "Brand",
      },
    },
    {
      id: 0.5,
      name: "Client",
      href: "#",
      image: {
        src: "/images/partners/google-logo.png",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/partners/google-logo.png",
        alt: "Brand",
      },
    },
    {
      id: 0.6,
      name: "Client",
      href: "#",
      image: {
        src: "/images/partners/slack-logo.png",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/partners/slack-logo.png",
        alt: "Brand",
      },
    },
    {
      id: 0.7,
      name: "Client",
      href: "#",
      image: {
        src: "/images/partners/linkedin-logo.png",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/partners/linkedin-logo.png",
        alt: "Brand",
      },
    },
  ],
} as TBrands;

const headingData = {
  heading:
    "We create experiences, platforms and partnerships that empower businesses to realise digital value, faster",
  link: {
    label: "Contact",
    type: "primary",
    url: "/contact",
  },
} as THeading;

const textWithImageData = {
  heading:
    "SwiftyByte is a people-led company that partners with organisations to create, enhance and transform their digital capabilities.",
  link: {
    label: "Our services",
    type: "secondary",
    url: "/services",
  },
  image: {
    src: "/images/about/about-banner.jpg",
    alt: "About Banner One",
  },
} as TTextWithImage;

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
        "Create digital experiences that stand out, enhancing your brand and driving conversions.",
      icon: {
        src: "/images/icon/user-experience.svg",
        alt: "Tailored Software Solutions",
      },
    },
    {
      id: 2,
      title: "Digital Products",
      description:
        "Make your digital product a core part of your business and deliver a first-class experience for your customers.",
      icon: {
        src: "/images/icon/digital-products.svg",
        alt: "Mobile App Innovation",
      },
    },
    {
      id: 3,
      title: "Digital Transformation",
      description:
        "Create change and deliver value that matches your broader organisational goals.",
      icon: {
        src: "/images/icon/digital-transformation.svg",
        alt: "Dynamic Web Solutions",
      },
    },
  ],
} as TServices;

export default function About() {
  return (
    <main>
      <Heading {...headingData} />
      <TextWithImage {...textWithImageData} />
      <Partners {...partnersData} />
      <Services {...servicesData} />
      <FunFact />
      <CTA />
    </main>
  );
}
