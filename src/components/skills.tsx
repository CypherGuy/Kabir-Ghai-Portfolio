"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { data } from "../data/data";

function SkillCard({ skill }) {
  return (
    <div className="flex items-center gap-4 group relative p-4 rounded-xl transition-all duration-200 hover:scale-105 bg-white/5 backdrop-blur-lg shadow-xl">
      <div className="absolute inset-0 rounded-xl bg-background/30 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.2)] border border-white/5"></div>
      <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
        <Image
          src={skill.image || "/placeholder.svg"}
          alt={skill.name}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <h4 className="relative text-lg font-medium text-teal-300 transition-colors duration-200 group-hover:text-teal-200">
        {skill.name}
      </h4>
    </div>
  );
}

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  useEffect(() => {
    if (inView) {
      const allSkills = Object.values(data.skills).flatMap((category) =>
        category.map((skill) => skill.name)
      );
      let delay = 0;
      const interval = setInterval(() => {
        setVisibleSkills((prev) => {
          const nextSkill = allSkills[prev.length];
          return nextSkill ? [...prev, nextSkill] : prev;
        });
        delay += 50;
        if (delay >= allSkills.length * 50) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 section-content ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-5xl font-light text-center text-text-primary">
          Skills
        </h2>
        <div className="space-y-16">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="space-y-8">
              <h3 className="text-3xl font-light text-text-primary">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skill-item ${
                      visibleSkills.includes(skill.name) ? "visible" : ""
                    }`}
                    style={{
                      transitionDelay: `${
                        visibleSkills.indexOf(skill.name) * 50
                      }ms`,
                    }}
                  >
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
