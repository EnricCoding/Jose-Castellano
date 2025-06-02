
import About from "./ui/AboutMe";
import Advantages from "./ui/Advantages";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import MissedOpportunities from "./ui/MissedOpportunities";
import Navbar from "./ui/Navbar";
import Services from "./ui/Services";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <MissedOpportunities></MissedOpportunities>
      <Advantages></Advantages>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
