"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
export default function Reveal({ children, className = "", delay = 0 }: { children:ReactNode; className?:string; delay?:number }) {
 const ref = useRef<HTMLDivElement>(null);
 const [visible, setVisible] = useState(false);
 useEffect(() => {
   const element = ref.current;
   if (!element) return;
   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(true);return; }
   const observer = new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);observer.disconnect();}}, {threshold:0.1,rootMargin:"0px 0px -24px 0px"});
   observer.observe(element); return ()=>observer.disconnect();
 }, []);
 return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
