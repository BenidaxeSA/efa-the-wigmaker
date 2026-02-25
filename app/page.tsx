import Hero from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import Creations from "@/components/Creations";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Expertise from "@/components/Expertise";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Creations />  
      <SectionDivider />
      <Expertise />
      <About />
      <Contact />
    </main>
  );
}
