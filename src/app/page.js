import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Audience from "../components/Audience/Audience";
import { Header } from "@/components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import ContactArea from "@/components/ContactArea/ContactArea";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <AboutMe />
      <Experience />
      <Audience />
      <ContactArea />
    </main>
  );
}
