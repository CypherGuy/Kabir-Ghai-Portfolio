"use client";

import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { data } from "../data/data";

export function WantTo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-32 relative">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 section-content ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-5xl font-light text-center">Want to..</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {Object.entries(data.wantTo).map(([key, section], index) => (
            <div
              key={key}
              className={`space-y-6 want-to-item ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-3xl text-teal-300">{section.title}</h3>
              <p className="text-xl text-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-12">
          {[
            {
              icon: Mail,
              text: "Email",
              href: `mailto:${data.social.email}`,
            },
            {
              icon: Github,
              text: "GitHub",
              href: data.social.github,
            },
            {
              icon: Linkedin,
              text: "LinkedIn",
              href: data.social.linkedin,
            },
            {
              icon: FileText,
              text: "Resume",
              href: data.social.resume,
            },
          ].map((item, index) => (
            <a
              key={item.text}
              href={item.href}
              className={`group flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-400/10 hover:bg-teal-400/20 transition-colors duration-200 social-button ${
                inView ? "visible" : ""
              }`}
              style={{ transitionDelay: `${(index + 3) * 200}ms` }}
            >
              <item.icon className="w-5 h-5 text-teal-300 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-text-secondary group-hover:text-teal-300 transition-colors duration-200">
                {item.text}
              </span>
            </a>
          ))}
        </div>
        <footer className="text-center text-lg text-text-secondary pt-12">
          {data.footer.copyright}
        </footer>
      </div>
    </section>
  );
}
