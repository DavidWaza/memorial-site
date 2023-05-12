"use client";
import CustomCarousel from "./CustomCarousel";

export default function Herosection() {
  return (
    <div className="hero-bg">
      <div className="flex justify-center m-36 carousel-position customCarouselPadding">
        <CustomCarousel />
      </div>
      <div className="flex justify-center">
        <p className="primary_font text-[20px] md:text-[40px]  text-white text-center md:leading-[52px] leading-[20px] absolute bottom-12">
          CHRISTIAN ATANI OKPOFAA OTOBOTEKERE JP
        </p>
        <p className="text-white primary_font text-[20px] absolute bottom-3">
          1925 - 2023
        </p>
      </div>
    </div>
  );
}
