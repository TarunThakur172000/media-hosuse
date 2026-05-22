import "./globals.css";

export const metadata = {
  title: "HIGH DESERT MEDIA",
  description: "Luxury cinematic media agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>{children}</body>
    </html>
  );
}
