import RootLayout from "@/components/RootLayout";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata = {
  title: "AnotherChanceStudio",
  description:
    "AnotherChanceStudio is a European XR studio for immersive training, industrial simulation and live events.",
  icons: {
    icon: [{ url: "/favicon.svg?v=nh2", type: "image/svg+xml" }],
    shortcut: "/favicon.svg?v=nh2",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-white text-base antialiased text-neutral-950"
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=nh2" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=nh2" />
      </head>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <RootLayout>{children}</RootLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
