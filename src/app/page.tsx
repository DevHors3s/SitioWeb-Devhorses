"use client";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import ProjectsSection from "../components/ProjectsSection";
import DemoShowcase from "../components/DemoShowcase";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Hero />
      <TechTicker />
      <Services />
      <Process />
      <ProjectsSection />
      <Testimonials />
      <DemoShowcase />
      <Contact />
    </main>
  );
}