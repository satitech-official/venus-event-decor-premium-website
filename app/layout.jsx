import "./globals.css";
import BasePathGuard from "./components/BasePathGuard";
import SiteFooter from "./components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://venus-event-decor.example";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const faviconUrl = `${basePath}/favicon.svg`;
const socialImageUrl = `${basePath}/image-fallback.svg`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Venus Event & Decor | Corporate, Exhibition & Religious Events in Indore",
    template: "%s | Venus Event & Decor",
  },
  description:
    "Venus Event & Decor produces corporate events, exhibitions, Bhagwat and religious programs, conferences, product launches, award functions and institutional events in Indore.",
  keywords: [
    "Venus Event & Decor",
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
    siteName: "Venus Event & Decor",
    title: "Venus Event & Decor | Professional Event Production in Indore",
    description:
<<<<<<< HEAD
      "Cinematic wedding decor, corporate event production, premium stages, floral installations and celebration design in Indore and beyond.",
    images: [
      {
        url: socialImageUrl,
        width: 1600,
        height: 1000,
        alt: "Venus Event & Decor premium event styling",
      },
    ],
=======
      "Corporate event production, exhibition stalls, religious programs, conferences, award functions and product launches in Indore.",
>>>>>>> 6c421e0 (upgrading)
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Event & Decor",
<<<<<<< HEAD
    description: "We Create. You Celebrate.",
    images: [socialImageUrl],
=======
    description: "Professional Events. Precise Production.",
>>>>>>> 6c421e0 (upgrading)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <BasePathGuard />
=======
        <div className="ambient-shapes" aria-hidden="true">
          <span className="shape shape-diamond" />
          <span className="shape shape-ribbon" />
          <span className="shape shape-frame" />
          <span className="shape shape-steps" />
        </div>
>>>>>>> 6c421e0 (upgrading)
        <div id="top" className="site-shell">
          <div className="site-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
