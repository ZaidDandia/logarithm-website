import Nav from "../components/nav";
import Footer from "../components/footer";
import LegacyHashRedirect from "../components/LegacyHashRedirect";
import "../index.css";

const siteName = "Logarithm Technologies";
const description =
  "Logarithm Technologies empowers clients globally by transforming their visions into tangible results through industry-leading product development.";

// TODO: add a 1200x630 og:image and replace the React placeholder icons (favicon.ico, logo192.png, logo512.png) in public/
export const metadata = {
  metadataBase: new URL("https://www.logarithmtech.com"),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", apple: "/logo192.png" },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description,
    url: "/",
  },
  twitter: { card: "summary", title: siteName, description },
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
