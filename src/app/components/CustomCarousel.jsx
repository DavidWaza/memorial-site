"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { UserCommentCard } from "./UserCommentCard";

import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper";

const UserCommentsProfile = [
  {
    name: "fernando suarez",
    src: "/dorrel.jpg",
  },
  {
    name: "sarah tabowski",
    src: "/sarah.jpg",
  },
  {
    name: "daave Santtta",
    src: "/daave.jpg",
  },
];
export default function App() {
  return (
    <>
      <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination]}
          className="mySwiper"
      >
        {UserCommentsProfile.map(({ name, src }, index) => (
          <SwiperSlide key={index}>
            <UserCommentCard src={src} name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
