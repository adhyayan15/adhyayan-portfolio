import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
 title: {default:"Adhyayan Tiwari — Engineering the Ideas I Grew Up With",template:"%s | Adhyayan Tiwari"},
 description:"Electrical Engineering student at USF, robotics builder, embedded hardware designer, researcher, and writer. Explore projects, research, and the story behind the work.",
 openGraph:{title:"Adhyayan Tiwari — Engineer, Builder, Researcher",description:"From imagining robots to engineering them.",type:"website",images:["/images/campus-bulls.webp"]},
 robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Navbar/>{children}<Footer/></body></html>}
