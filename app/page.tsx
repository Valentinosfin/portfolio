import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Projects />
      <Services />
      <About />
      <Contact />
    </>
  );
}
