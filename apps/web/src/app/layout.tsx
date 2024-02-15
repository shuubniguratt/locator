import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { AxiomWebVitals } from "next-axiom";
import { Toaster } from "react-hot-toast";

import { Navbar } from "~/components/navbar";
// import { Footer } from "~/components/footer";
import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/styles/globals.css";

import { Footer } from "~/components/footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

// const robotoMono = Roboto_Mono({
//   subsets: ["latin", "cyrillic"],
//   display: "swap",
//   variable: "--font-roboto-mono",
// });

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://na-locator.vercel.app/"
      : "http://localhost:3000",
  ),
  title: "Локатор 😉 в Беларуси",
  description: "Простое приложение для поиска групп и собраний в Беларуси 🙋‍♂️🙋‍♀️",
  openGraph: {
    title: "NA Belarus Locator",
    description:
      "Простое приложение для поиска групп и собраний в Беларуси 🙋‍♂️🙋‍♀️",
    url: "https://na-locator.vercel.app/",
    siteName: "Локатор 😉 в Беларуси",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@anonymous",
    creator: "@anonymous",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      // className={`${inter.variable} ${robotoMono.variable}`}
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <AxiomWebVitals />
      <body className="mx-auto h-dvh min-h-screen max-w-2xl font-sans antialiased">
        <TRPCReactProvider>
          <Toaster position="bottom-center" />
          <Navbar />
          <main className="mx-4 flex flex-col">{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
