"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Herosection from "./components/Herosection";
import BioSection from "./components/BioSection";
import GalTributeSection from "./components/GalTributeSection";
import Navbar from "./components/Navbar";
import ModalButton from "./components/ModalForm";
import { motion } from "framer-motion";
import FbLoginButton from "./components/FbLoginButton";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main className="primary_font flex flex-col items-center justify-between md:-mt-5">
      <Navbar />
      <Herosection />
      <Container maxWidth="lg">
        <BioSection />
        <GalTributeSection />
        <div className="py-3 my-4 hover:bg-grey">
          <ModalButton />
        </div>
        <FbLoginButton />
      </Container>
    </main>
  );
}
