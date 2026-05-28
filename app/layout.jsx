import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://highdesertmediaaz.com"),

  title: {
    default: "High Desert Media | Cinematic Real Estate & Branding Media",
    template: "%s | High Desert Media",
  },

  description:
    "High Desert Media creates cinematic real estate media, luxury branding content, aerial cinematography, and premium social-first visuals designed for modern agents, brands, and businesses.",

  keywords: [
    "High Desert Media",
    "cinematic real estate media",
    "luxury real estate videography",
    "real estate branding",
    "agent branding videos",
    "drone cinematography",
    "luxury media production",
    "real estate content creation",
    "social media reels",
    "branding content agency",
    "aerial video production",
    "real estate marketing videos",
    "cinematic branding",
    "luxury content production",
  ],

  authors: [
    {
      name: "High Desert Media",
    },
  ],

  creator: "High Desert Media",

  publisher: "High Desert Media",

  openGraph: {
    title: "High Desert Media | Cinematic Real Estate & Branding Media",

    description:
      "Luxury cinematic media for real estate, branding, automotive, and modern digital presence.",

    url: "https://highdesertmediaaz.com",

    siteName: "High Desert Media",

    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "High Desert Media",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "High Desert Media | Cinematic Branding & Real Estate Media",

    description:
      "Cinematic storytelling for luxury real estate, branding, and modern digital presence.",

    images: ["/images/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://highdesertmediaaz.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.jpeg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
