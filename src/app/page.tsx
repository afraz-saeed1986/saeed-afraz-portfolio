import { Expertise } from "@/components/home/expertise";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { CTA } from "@/components/home/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Experience } from "@/components/home/experience";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Expertise />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}