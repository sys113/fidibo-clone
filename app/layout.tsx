import type { Metadata } from "next";
import Providers from "./providers";
import fontIransansx from "@/constants/fonts";
import Template from "@/containers/template";
import "@/styles/global.css";
import "normalize.css/normalize.css";

export const metadata: Metadata = {
  title: "فیدیبو",
  description: "طراحی و توسعه توسط حمید شاهسونی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" data-theme="dark">
      <body
        suppressHydrationWarning={true}
        className={`${fontIransansx.className}`}
      >
        <Providers>
          <Template>{children}</Template>
        </Providers>
      </body>
    </html>
  );
}
