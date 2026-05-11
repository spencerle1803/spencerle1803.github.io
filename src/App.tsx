import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Services from "./components/Services";
import BrandingContent from "./components/BrandingContent";
import GraphicDesign from "./components/GraphicDesign";
import PaidAdvertising from "./components/PaidAdvertising";

export default function App() {
  return (
    <div className="min-h-screen bg-lime text-blue">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <BrandingContent />
        <GraphicDesign />
        <PaidAdvertising />
        <SocialMedia />
        {/* <Services /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
