import Image from "next/image";
import Herosection from "./components/Herosection";
import BioSection from "./components/BioSection";
import GalTributeSection from "./components/GalTributeSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="primary_font flex flex-col items-center justify-between mt-10 md:-mt-5">
      <Navbar />
      <Herosection />
      <BioSection />
      <GalTributeSection />
    </main>
  );
}
