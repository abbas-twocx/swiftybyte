import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { TBrands, THero, TServices, TAbout } from "@/types/types";
import Services from "@/components/Features";
import Partners from "@/components/Partners";

export const metadata: Metadata = {
  title: "We are the digital change makers",
  description:
    "We create experiences, platforms and partnerships that empower businesses to realise digital value, faster.",
  keywords:
    "digital transformation, technology solutions, product development, digital experience, tech modernization, innovation, digital strategy",
  robots: "index, follow",
  openGraph: {
    title: "We are the digital change makers",
    description:
      "We create experiences, platforms and partnerships that empower businesses to realise digital value, faster.",
    url: "https://www.swiftybyte.com",
    type: "website",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/hero/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "We are the digital change makers",
      },
    ],
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "We are the digital change makers",
    description:
      "We create experiences, platforms and partnerships that empower businesses to realise digital value, faster.",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/hero/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "We are the digital change makers",
      }
    ],
  },
};

const heroData = {
  heading: "We are the digital change makers",
  description:
    "We create experiences, platforms and partnerships that empower businesses to realise digital value, faster.",
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

const brandData = {
  showHeading: false,
  brands: [
    {
      id: 0.25,
      name: "Client",
      href: "#",
      image: {
        src: "/images/brand/brand-light-01.svg",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/brand/brand-dark-01.svg",
        alt: "Brand",
      },
    },
    {
      id: 0.3,
      name: "Client",
      href: "#",
      image: {
        src: "/images/brand/brand-light-02.svg",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/brand/brand-dark-02.svg",
        alt: "Brand",
      },
    },
    {
      id: 0.4,
      name: "Client",
      href: "#",
      image: {
        src: "/images/brand/brand-light-03.svg",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/brand/brand-dark-03.svg",
        alt: "Brand",
      },
    },
    {
      id: 0.5,
      name: "Client",
      href: "#",
      image: {
        src: "/images/brand/brand-light-04.svg",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/brand/brand-dark-04.svg",
        alt: "Brand",
      },
    },
    {
      id: 0.6,
      name: "Client",
      href: "#",
      image: {
        src: "/images/brand/brand-light-05.svg",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/brand/brand-dark-05.svg",
        alt: "Brand",
      },
    },
    {
      id: 0.7,
      name: "Client",
      href: "#",
      image: {
        src: "/images/brand/brand-light-06.svg",
        alt: "Brand",
      },
      imageLight: {
        src: "/images/brand/brand-dark-06.svg",
        alt: "Brand",
      },
    },
  ],
} as TBrands;

const partnersData = {
  showHeading: true,
  title: "OUR PARTNERS",
  subTitle: "Our Partner Ecosystem",
  decription:
    "Collaborating with industry leaders to bring you cutting-edge solutions and exceptional results.",
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

const aboutData = {
  tag: "Our Story",
  heading: "Innovating Digital Futures Through Strategic Partnerships",
  description:
    "Since 2017, SwiftyByte has been on a transformative journey, marked by our pivotal partnership with Vodafone through the Digital X Programme. Under our leadership, this collaboration has led to six major industry awards and groundbreaking innovations, including the launch of the first-ever end-to-end chatbot-driven sales journey for a telecom company. Additionally, our efforts culminated in the most successful iPhone launch to date. Our story is one of innovation, dedication, and a relentless pursuit of excellence, driving us to redefine the digital landscape and deliver exceptional value.",
  image: {
    src: "/images/about/our-story.jpg",
    alt: "Our Story Banner",
  },
} as TAbout;

const aboutData2 = {
  tag: "SUSTAINABILITY",
  heading: "Our Pledge",
  description:
    "In 2020 SwiftyByte became a carbon negative company, offsetting far more emissions than we generate. And we are now leading the way in switching over to carbon removals. We've pledged to halve our employee carbon footprint by 2024. As part of the MSQ agency group, we now have formally approved Science Based Targets to reduce it even further by 2030, as we move towards Net Zero.",
  image: {
    src: "/images/about/illustration-11.png",
    alt: "Our Pledge Banner",
  },
} as TAbout;

const clientsData = {
  showHeading: true,
  title: "OUR CLIENTS",
  subTitle: "Trusted by Leading Brands",
  decription:
    "We partner with top-tier companies to deliver innovative solutions and achieve outstanding results together.",
  brands: [
    {
      id: 0.25,
      name: "Napco National",
      href: "#",
      image: {
        src: "/images/clients/napconational-logo.png",
        alt: "Napco National",
      },
      imageLight: {
        src: "/images/clients/napconational-logo.png",
        alt: "Napco National",
      },
    },
    {
      id: 0.3,
      name: "Indevco",
      href: "#",
      image: {
        src: "/images/clients/indevco-logo.png",
        alt: "Indevco",
      },
      imageLight: {
        src: "/images/clients/indevco-logo.png",
        alt: "Indevco",
      },
    },
    {
      id: 0.4,
      name: "Sanita",
      href: "#",
      image: {
        src: "/images/clients/sanita-logo.png",
        alt: "Sanita",
      },
      imageLight: {
        src: "/images/clients/sanita-logo.png",
        alt: "Sanita",
      },
    },
    {
      id: 0.5,
      name: "Woosooq",
      href: "#",
      image: {
        src: "/images/clients/woosooq-logo.png",
        alt: "Woosooq",
      },
      imageLight: {
        src: "/images/clients/woosooq-logo.png",
        alt: "Woosooq",
      },
    },
  ],
} as TBrands;

export default function Home() {
  return (
    <main>
      <Hero {...heroData} />
      {/* <Brands {...brandData} /> */}
      <Services {...servicesData} />
      {/* <Partners {...partnersData} /> */}
      <About {...aboutData} />
      <Partners {...clientsData} />
      <About {...aboutData2} />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <CTA />
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
