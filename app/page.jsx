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

export default function Home() {
  return (
    <main className="bg-black text-ivory">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Concierge />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
