"use client";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import DemoShowcase from "../components/DemoShowcase";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      <Hero />
      <TechTicker />
      <Services />
      <Process />
      <Testimonials />
      <DemoShowcase />
      <Contact />
    </main>
  );
}