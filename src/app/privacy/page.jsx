import Privacy from "../../PrivacyPolicy";
import { ogImage, siteName } from "../../seo";

const title = "Privacy Policy";
const description =
  "How Logarithm Technologies collects, uses, and safeguards your personal data.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/privacy/" },
  openGraph: {
    type: "website",
    siteName,
    title: `${title} | ${siteName}`,
    description,
    url: "/privacy/",
    images: [ogImage],
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
