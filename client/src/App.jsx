import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import OpeningHours from "./components/OpeningHours";
import OfferBanner from "./components/OfferBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);

if (loading) {
  return <Loader />;
}
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Menu />
      <Testimonials />
      <OfferBanner />
      <OpeningHours />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;