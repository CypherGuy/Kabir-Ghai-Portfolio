"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { data } from "../data/data";

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      <div className="w-12 h-[2px] bg-text-secondary/20 transform -rotate-90 absolute -left-5 top-[50%]" />
      <a
        href={`mailto:${data.social.email}`}
        className="text-teal-300 hover:text-teal-200 transition-colors"
        aria-label="Email"
      >
        <Mail size={32} />
      </a>
      <a
        href={data.social.github}
        className="text-teal-300 hover:text-teal-200 transition-colors"
        aria-label="GitHub"
      >
        <Github size={32} />
      </a>
      <a
        href={data.social.linkedin}
        className="text-teal-300 hover:text-teal-200 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={32} />
      </a>
    </div>
  );
}
