import Nav from "../components/nav";
import Footer from "../components/footer";
import LegacyHashRedirect from "../components/LegacyHashRedirect";
import { description, ogImage, siteName } from "../seo";
import "../index.css";

export const metadata = {
  metadataBase: new URL("https://www.logarithmtech.com"),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  manifest: "/manifest.json",
  // Query string forces browsers to drop the cached React favicon.
  icons: { icon: "/favicon.ico?v=2", apple: "/logo192.png?v=2" },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description,
    url: "/",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LegacyHashRedirect />
        <div className="wrapper">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
