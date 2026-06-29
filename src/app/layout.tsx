import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/theme.css";
import { metadata } from "@/shared/config/metadata";
import { Providers } from "@/providers";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="afterInteractive"
/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}
          <Toaster richColors/>
        </Providers>
      </body>
    </html>
  );
}
export { metadata };
