import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/project/Projects";
import Principles from "./sections/Principles";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
