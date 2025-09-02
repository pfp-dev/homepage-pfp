import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import Recruitment from "@/components/sections/Recruitment";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Works />
      <Recruitment />
      <Contact />
      <Footer />
    </main>
  );
}
