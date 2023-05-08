import Image from "next/image";
import Herosection from "./components/Herosection";
import BioSection from "./components/BioSection";
import GalTributeSection from "./components/GalTributeSection";
import SendMessageForm from "./components/SendMessageForm";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="primary_font flex flex-col items-center justify-between">
      <div className="text-center mt-20">
        <Header title="memory" />
      </div>
      <Herosection />
      <BioSection />
      <GalTributeSection />
      <SendMessageForm />
    </main>
  );
}
