import Nav from './components/Nav';
import Hero from './components/Hero';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoreSkills from './components/CoreSkills';
import Services from './components/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-lime text-blue">
      <Nav />
      <main>
        <Hero />
        <About />
        <CoreSkills />
        <SocialMedia />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
