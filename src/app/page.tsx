import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { Experience } from "../components/experience";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { WantTo } from "../components/want-to";
import { SocialSidebar } from "../components/social-sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <SocialSidebar />
      <div className="pl-16">
        <section id="about">
          <Hero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <WantTo />
        </section>
      </div>
    </main>
  );
}
