"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { data } from "../data/data";

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`card-slide group relative grid gap-8 pb-1 sm:grid-cols-12 ${
        inView ? "animate" : ""
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none sm:-inset-x-6 group-hover:block group-hover:bg-slate-800/50 group-hover:backdrop-blur-lg group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>

      {/* Image Container - Ensuring Full Image Display */}
      <div className="relative sm:col-span-5 sm:order-1 z-10">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600} // Adjust width accordingly
          height={400} // Adjust height accordingly
          priority
          quality={100}
          className="object-contain rounded-xl border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
        />
      </div>

      <div className="z-10 sm:col-span-7 sm:order-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-light text-text-primary group-hover:text-teal-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-teal-300">{project.date || "N/A"}</span>
        </div>
        <p className="mt-2 text-text-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-teal-300 bg-teal-400/10 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
            >
              <ExternalLink size={20} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <h2 className="text-5xl font-light text-center text-text-primary">
          Projects
        </h2>
        <div className="space-y-24 mt-16">
          {data.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
