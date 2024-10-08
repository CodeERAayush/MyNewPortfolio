import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Socials from "@/sections/socials";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills />
    </>
  );
}
