import Privacy from "../../PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Logarithm Technologies collects, uses, and safeguards your personal data.",
  alternates: { canonical: "/privacy/" },
  openGraph: { url: "/privacy/" },
};

export default function PrivacyPage() {
  return <Privacy />;
}
