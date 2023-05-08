import Image from "next/image";
import Herosection from "./components/Herosection";
import BioSection from "./components/BioSection";
import GalTributeSection from "./components/GalTributeSection";

export default function Home() {
  return (
    <main className="primary_font flex flex-col items-center justify-between">
      <Herosection />
      <BioSection />
      <GalTributeSection />
    </main>
  );
}
