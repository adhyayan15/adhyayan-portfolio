import type {Metadata} from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/data/projects";
export const metadata:Metadata={title:"Engineering Work",description:"Selected robotics, computer vision, embedded hardware and digital design projects by Adhyayan Tiwari."};
export default function Work(){return <main id="main"><section className="page-hero container"><div className="eyebrow copper">INDEX / 01</div><h1>Work that started<br/>with a <em>question.</em></h1><p>Some projects are built. Some are simulated. Others are still waiting to become physical hardware. I try to be clear about which is which—and what I've actually learned.</p></section><section className="container inner-projects"><div className="project-grid">{projects.map((p,i)=><Reveal key={p.slug} delay={i%2*80}><ProjectCard project={p}/></Reveal>)}</div></section></main>}
