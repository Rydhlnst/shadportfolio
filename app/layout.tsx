import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Bar/SideBar";
import Navbar from "@/components/Bar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import RightSideBar from "@/components/Bar/RightSideBar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RyanCode",
  description: "Ur Personal Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <div className="flex flex-col relative">
            <Navbar/>
            <div className="flex">
              <SideBar/>
              <section className='flex min-h-screen flex-1 flex-col justify-between pt-36'>
                <div className=' w-full max-w-5xl px-12'>{children}</div>
                <Footer/>
              </section>
              <RightSideBar/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
