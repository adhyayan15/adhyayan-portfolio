import Link from "next/link";
import type {Project} from "@/data/projects";
export default function ProjectCard({project,feature=false}:{project:Project;feature?:boolean}) {
 return <Link href={`/work/${project.slug}`} className={`project-card v3-project-card ${feature?"project-card-feature":""}`} style={{"--project-accent":project.accent} as React.CSSProperties}>
  <div className="project-image">
   {project.image?<img src={project.image} alt={project.imageAlt||project.title} loading="lazy"/>:<div className="project-fallback"><div className="fallback-grid"/><span>W0</span><span>W1</span><span>W2</span><span>W3</span><small>FIFO / DISPATCH</small></div>}
   <span className="v3-project-image-hint">VIEW THE ENGINEERING ↗</span>
  </div>
  <div className="project-details">
   <div className="v3-project-meta">{project.category.replaceAll(" / "," · ")} <span>{project.year}</span></div>
   <div className="project-title-row"><h3>{project.title}</h3><span aria-hidden="true" className="circle-arrow">↗</span></div>
   <p>{project.summary}</p>
   <div className="v3-project-extra">
     <div className="v3-extra-line"><span>THE QUESTION</span><p>{project.question}</p></div>
     <div className="v3-extra-line"><span>RESULT / STATUS</span><p>{project.result}</p></div>
     <div className="v3-extra-line"><span>WHAT I LEARNED</span><p>{project.lessons[0]}</p></div>
   </div>
   <div className="tags">{project.tools.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>
  </div>
 </Link>
}
