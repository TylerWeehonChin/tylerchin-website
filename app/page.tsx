import Footer from "./components/footer";
import Header from "./components/header";
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';

export default function Home() {
  return (
    <div className="bg-[#F6F1DE] text-[#3E3F5B] h-screen flex flex-col">
    <Header />
    <div className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <section className="snap-start h-screen flex items-center justify-center">
        <Footer />
      </section>
    </div>
  </div>
  );
}
