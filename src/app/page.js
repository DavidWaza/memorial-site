import Image from "next/image";
import Herosection from "./components/Herosection";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <main className="primary_font flex flex-col items-center justify-between">
      <Herosection />
      <Spotlight />
    </main>
  );
}
