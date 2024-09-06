import Contact from "@/components/Contact";
import Heading from "@/components/Heading";
import Spacer from "@/components/Spacer";
import { THeading } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - SwiftyByte",
  description:
    "Get in touch with SwiftyByte to discuss how we can help transform your digital capabilities. Reach out to us for inquiries, support, or collaboration.",
  keywords:
    "contact, digital transformation, technology solutions, SwiftyByte, customer support, business inquiries",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - SwiftyByte",
    description:
      "Get in touch with SwiftyByte to discuss how we can help transform your digital capabilities. Reach out to us for inquiries, support, or collaboration.",
    url: "https://www.swiftybyte.com/contact",
    type: "website",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/about/about-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us - SwiftyByte",
      },
    ],
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "Contact Us - SwiftyByte",
    description:
      "Get in touch with SwiftyByte to discuss how we can help transform your digital capabilities. Reach out to us for inquiries, support, or collaboration.",
    images: [
      {
        url: "https://swiftybyte.vercel.app/images/about/about-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us - SwiftyByte",
      },
    ],
  },
};

const headingData = {
  heading: "Let's chat!",
} as THeading;

function ContactPage() {
  return (
    <main>
      <Heading {...headingData} />
      <Contact />
      <Spacer />
      <Spacer />
    </main>
  );
}

export default ContactPage;
