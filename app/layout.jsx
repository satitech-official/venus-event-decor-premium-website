import "./globals.css";
import BasePathGuard from "./components/BasePathGuard";
import SiteFooter from "./components/SiteFooter";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://satitech-official.github.io/venus-event-decor-premium-website/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const faviconUrl = `${basePath}/favicon.svg`;
const socialImageUrl = `${basePath}/image-fallback.svg`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Venus Event & Suppliers | Event Production House in Indore",
    template: "%s | Venus Event & Suppliers",
  },
  description:
    "Venus Event & Suppliers produces corporate events, exhibitions, Bhagwat and religious programs, conferences, product launches, award functions and institutional events in Indore.",

  keywords: [
    "Venus Event & Suppliers",
    "corporate events Indore",
    "exhibition stall setup Indore",
    "Bhagwat event setup Indore",
    "religious event production Indore",
    "corporate event production",
    "conference event setup",
    "product launch event",
  ],

  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Venus Event & Suppliers",
    title:
      "Venus Event & Suppliers | Professional Event Production in Indore",
    description:
      "Corporate event production, exhibition stalls, religious programs, conferences, award functions and product launches in Indore.",
    images: [
      {
        url: socialImageUrl,
        width: 1600,
        height: 1000,
        alt: "Venus Event & Suppliers premium event styling",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Venus Event & Suppliers",
    description: "We Create. You Celebrate.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BasePathGuard />

        <div className="ambient-shapes" aria-hidden="true">
          <span className="shape shape-diamond" />
          <span className="shape shape-ribbon" />
          <span className="shape shape-frame" />
          <span className="shape shape-steps" />
        </div>

        <div id="top" className="site-shell">
          <div className="site-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}