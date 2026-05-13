import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Coverage from "./components/Coverage";
import Features from "./components/Features";
import SpeedTest from "./components/SpeedTest";
import AppShowcase from "./components/AppShowcase";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Plans />
      <Coverage />
      <Features />
      <SpeedTest />
      <AppShowcase />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

