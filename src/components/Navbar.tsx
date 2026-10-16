"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";

const sections = [
 {label:"Story",id:"story"},{label:"Impact",id:"impact"},
 {label:"Education",id:"education"},{label:"Projects",id:"projects"},
 {label:"Experience",id:"experience"},{label:"Leadership",id:"leadership"},
 {label:"Contact",id:"contact"}
];
const socials=[
 {name:"GitHub",url:"https://github.com/adhyayan15"},
 {name:"LinkedIn",url:"https://www.linkedin.com/in/adhyayan-tiwari-at/"},
];
function SocialIcon({name}:{name:string}){return name==="GitHub"?<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"/></svg>:<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"/></svg>}
export default function Navbar(){
 const [open,setOpen]=useState(false);const path=usePathname();
 useEffect(()=>{function closeOnEscape(e:KeyboardEvent){if(e.key==="Escape")setOpen(false)}window.addEventListener("keydown",closeOnEscape);return ()=>window.removeEventListener("keydown",closeOnEscape)},[]);
 return <header className="nav-shell nav-v3"><nav className="nav-inner" aria-label="Primary navigation">
  <Link className="brand" href="/#top" onClick={()=>setOpen(false)} aria-label="Adhyayan Tiwari, back to top">A<span className="brand-dot">.</span>T<span className="brand-slash">/</span></Link>
  <div id="primary-nav-links" className={`nav-links v3-nav-links ${open?"nav-open":""}`}>
   {sections.map(s=><Link key={s.id} href={`/#${s.id}`} onClick={()=>setOpen(false)} className={path==="/"?"":"nav-secondary"}>{s.label}</Link>)}
  </div>
  <div className="nav-right v3-nav-right">
    <div className="v3-nav-socials">{socials.map(s=><a key={s.name} href={s.url} title={s.name} aria-label={`Visit ${s.name} profile (opens new tab)`} target="_blank" rel="noreferrer"><SocialIcon name={s.name}/><span className="v3-external">↗</span></a>)}</div>
    <button className="menu-button" aria-controls="primary-nav-links" aria-expanded={open} aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?"CLOSE":"MENU"}</button>
  </div>
 </nav></header>
}
