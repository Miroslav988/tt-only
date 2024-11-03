import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Импортируйте стили Swiper
import "./NewsSection.scss";
import NewsCard from "../UI/NewsCard/NewsCard";

interface NewsNewsSection {
  startDate: number;
  newsArr: string[];
}

const NewsSection: React.FC<NewsNewsSection> = ({ newsArr, startDate }) => {
  const [animationClass, setAnimationClass] = useState("activeName");

  useEffect(() => {
    setAnimationClass("");
    const timer = setTimeout(() => {
      setAnimationClass("activeName");
    }, 500);
    return () => clearTimeout(timer);
  }, [newsArr]);
  return (
    <div className={`newsSection ${animationClass}`}>
      <Swiper
        key={startDate}
        modules={[Navigation]}
        spaceBetween={80}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        slidesPerView="auto"
        freeMode={true}
        initialSlide={0}
      >
        {newsArr.map((newsContent, index) => (
          <SwiperSlide key={startDate + index}>
            <NewsCard newsDate={startDate + index} newsContent={newsContent} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev  button-prev"></div>
      <div className="swiper-button-next  button-next"></div>
    </div>
  );
};

export default NewsSection;
