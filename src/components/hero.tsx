"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react"; // Import MapPin icon
import { data } from "../data/data";

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen pt-20 relative">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center"
      >
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-light">Hello! I am</h2>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold">{data.name}</h1>
              <div className="flex items-center mt-2 text-text-secondary">
                <MapPin className="w-5 h-5 mr-1" />
                <span>London, UK</span>
              </div>
            </div>
            <p className="text-2xl lg:text-3xl">
              <span className="text-text-primary">{data.roles.primary}</span>{" "}
              <span className="text-accent-text">●</span>{" "}
              <span className="text-text-primary">{data.roles.secondary}</span>
            </p>
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
              {data.summary}
            </p>
            <a
              href={data.social.resume}
              className="inline-block border-2 border-teal-300 text-teal-300 px-6 py-2 lg:px-8 lg:py-3 text-lg bg-teal-400/10 hover:bg-teal-300 hover:text-background transition-colors"
            >
              Get my resume
            </a>
          </div>
          <div
            className={`hero-image-container mt-8 md:mt-0 transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
            }`}
          >
            <div className="hero-image border-2 border-teal-300">
              <Image
                src={data.profileImage || "./placeholder.jpg"}
                alt={data.name}
                fill
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
