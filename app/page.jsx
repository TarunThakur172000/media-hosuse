"use client";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Concierge from "../sections/Concierge";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import StrategyCallModal from "../sections/StrategyCallModal";
import { useState } from "react";
export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="bg-black text-ivory">
      <Navbar setOpenModal={setOpenModal} />
      <Hero setOpenModal={setOpenModal} />
      <About />
      <Services />
      <Portfolio />
      <Concierge setOpenModal={setOpenModal} />
      <Testimonials />
      <CTA setOpenModal={setOpenModal} />
      <Contact />
      <Footer setOpenModal={setOpenModal} />
      <StrategyCallModal open={openModal} setOpen={setOpenModal} />
    </main>
  );
}
