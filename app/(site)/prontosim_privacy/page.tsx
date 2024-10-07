import Heading from "@/components/Heading";
import Spacer from "@/components/Spacer";
import { THeading } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy - SwiftyByte",
  description:
    "Read our Privacy Policy to understand how SwiftyByte handles your data when using our eSIM application, ProntoSIM.",
  keywords:
    "privacy policy, data protection, SwiftyByte, ProntoSIM, personal data, eSIM app",
  robots: "index, follow",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}`),
  openGraph: {
    title: "Privacy Policy - SwiftyByte",
    description:
      "Learn how SwiftyByte handles your personal information when you use our eSIM app ProntoSIM.",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}/privacy`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}/images/privacy-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - SwiftyByte",
      },
    ],
    siteName: "SwiftyByte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SwiftyByte",
    title: "Privacy Policy - SwiftyByte",
    description:
      "Read how SwiftyByte protects your personal information when you use our ProntoSIM app.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://www.swiftybyte.com'}/images/privacy-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - SwiftyByte",
      },
    ],
  },
};

const headingData = {
  heading: "Privacy Policy",
} as THeading;

function PrivacyPolicy() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-8">
      <Heading {...headingData} />
      <Spacer />

      <section className="space-y-6 text-lg leading-relaxed">
        <p className="font-semibold">Last updated: 6-10-2024</p>

        <p>
          SwiftyByte SARL ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our eSIM application, ProntoSIM ("the App"). By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We collect the following types of information:
          <br />
          <strong>a. Personal Information</strong> - When you register or use the App, we may collect personal information, including but not limited to: Name, Email address, Payment information, Device information.
          <br />
          <strong>b. Usage Data</strong> - Non-personal information about how the App is accessed and used.
          <br />
          <strong>c. Location Data</strong> - We may collect location data to provide services related to your location.
        </p>

        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <p>We use the information collected to provide, operate, maintain, and improve the App, process transactions, etc.</p>

        <h2 className="text-xl font-semibold">3. How We Share Your Information</h2>
        <p>We do not sell your personal information. However, we may share it with service providers, legal entities, or during business transfers.</p>

        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>We take reasonable measures to protect your data, but no method of transmission is 100% secure.</p>

        <h2 className="text-xl font-semibold">5. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal data.</p>

        <h2 className="text-xl font-semibold">6. Cookies and Tracking Technologies</h2>
        <p>We may use cookies and similar technologies to improve the App functionality.</p>

        <h2 className="text-xl font-semibold">7. Third-Party Links</h2>
        <p>We are not responsible for the privacy practices of third-party websites linked in the App.</p>

        <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
        <p>The App is not intended for use by anyone under the age of 16.</p>

        <h2 className="text-xl font-semibold">9. Changes to This Privacy Policy</h2>
        <p>We may update this policy periodically. Check this page for updates.</p>

        <h2 className="text-xl font-semibold">10. Contact Us</h2>
        <p>
          For any questions about this Privacy Policy, contact us at info@prontosim.com.
        </p>
      </section>

      <Spacer />
    </main>
  );
}

export default PrivacyPolicy;
