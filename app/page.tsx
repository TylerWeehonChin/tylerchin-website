import Footer from "./components/footer";
import Header from "./components/header";
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import BackToTop from './components/back-to-top';

export default function Home() {
  return (
    <div className="bg-[#F6F1DE] text-[#3E3F5B] min-h-screen flex flex-col w-full">
      <Header />
      <div className="flex-1 overflow-y-auto scroll-smooth w-full">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
