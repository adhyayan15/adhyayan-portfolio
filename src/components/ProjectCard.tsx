"use client";
import {useState} from "react";
import Link from "next/link";
import type {Project} from "@/data/projects";
export default function ProjectCard({project,feature=false}:{project:Project;feature?:boolean}) {
 const [expanded,setExpanded]=useState(false);
 const detailId=`details-${project.slug}`;
 return <article className={`project-card v3-project-card ${feature?"project-card-feature":""} ${expanded?"v3-expanded":""}`} style={{"--project-accent":project.accent} as React.CSSProperties}>
  <Link href={`/work/${project.slug}`} className="project-image" aria-label={`Read ${project.title} case study`}>
   {project.image?<img src={project.image} alt={project.imageAlt||project.title} loading="lazy"/>:<div className="project-fallback"><div className="fallback-grid"/><span>W0</span><span>W1</span><span>W2</span><span>W3</span><small>FIFO / DISPATCH</small></div>}
   <span className="v3-project-image-hint">VIEW PROJECT ↗</span>
  </Link>
  <div className="project-details">
   <div className="v3-project-meta">{project.category.replaceAll(" / "," · ")} <span>{project.year}</span></div>
   <div className="project-title-row"><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><Link href={`/work/${project.slug}`} aria-label={`Open ${project.title}`} className="circle-arrow">↗</Link></div>
   <p>{project.summary}</p>
   <div id={detailId} className="v3-project-extra">
     <div className="v3-extra-line"><span>THE QUESTION</span><p>{project.question}</p></div>
     <div className="v3-extra-line"><span>RESULT / STATUS</span><p>{project.result}</p></div>
     <div className="v3-extra-line"><span>WHAT I LEARNED</span><p>{project.lessons[0]}</p></div>
   </div>
   <div className="tags">{project.tools.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>
   <div className="v3-card-actions"><button type="button" className="v3-expand-button" onClick={()=>setExpanded(x=>!x)} aria-expanded={expanded} aria-controls={detailId}>{expanded?"LESS DETAIL −":"MORE DETAIL +"}</button><Link className="inline-link" href={`/work/${project.slug}`}>CASE STUDY ↗</Link></div>
  </div>
 </article>;
}
