import { Geist, Geist_Mono, Syne,Oswald} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Montserrat} from "next/font/google";
// import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'Your Site Title',
  description: 'Your Site Description',
};

const montserrat = Montserrat ({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const syne = Syne ({
  variable: "--font-syne",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}