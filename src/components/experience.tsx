"use client";

import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { data } from "../data/data";

interface Job {
  period: string;
  title: string;
  company: string;
  link?: string;
  responsibilities?: string[];
  technologies?: string[];
}

function ExperienceCard({ job }: { job: Job }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`card-item animate-card group relative grid grid-cols-[1fr,4fr] gap-4 md:gap-6 pb-8 transition-transform duration-1000 ease-in-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none sm:-inset-x-6 group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>

      <div className="text-sm text-text-secondary">{job.period}</div>

      <div className="z-10">
        <div className="flex items-center gap-2">
          <h3 className="text-xl text-text-primary group-hover:text-teal-300 transition-colors">
            {job.title}
            {job.link && (
              <a
                href={job.link}
                className="inline-flex items-center ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            )}
          </h3>
        </div>
        <div className="text-lg text-teal-300 mb-2">{job.company}</div>

        {job.responsibilities && job.responsibilities.length > 0 && (
          <ul className="list-disc pl-4 space-y-2 text-text-secondary">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="leading-relaxed">
                {responsibility}
              </li>
            ))}
          </ul>
        )}

        {job.technologies && job.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-teal-300 bg-teal-400/10 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="spotlight-container">
          <h2 className="text-5xl font-light text-center text-text-primary">
            Experience
          </h2>
          <div className="space-y-24 mt-16">
            {data.experience.map((job) => (
              <ExperienceCard key={`${job.company}-${job.period}`} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
