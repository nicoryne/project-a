import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/landing/LandingHeader";

export const metadata: Metadata = {
  title: "Project A | CEL",
  description: "CEL Statistics Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
      </head>
      <body>
        <hr className="w-[90%] mx-auto rounded-full border-[#242424]" />
        {children}
      </body>
    </html>
  );
}
