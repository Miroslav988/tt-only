import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "./NewsSection.scss";
import NewsCard from "../UI/NewsCard/NewsCard";

interface NewsSectionProps {
  readonly startDate: number;
  readonly newsArr: ReadonlyArray<string>;
}

type AnimationClass = "" | "activeName";

const NewsSection: FC<NewsSectionProps> = ({ newsArr, startDate }) => {
  const [animationClass, setAnimationClass] =
    useState<AnimationClass>("activeName");
  const [spaceBetween, setSpaceBetween] = useState<number>(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSpaceBetween(20);
      } else {
        setSpaceBetween(80);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setAnimationClass("");
    const timer: NodeJS.Timeout = setTimeout(() => {
      setAnimationClass("activeName");
    }, 500);
    return () => clearTimeout(timer);
  }, [newsArr]);

  return (
    <div className={`newsSection ${animationClass}`}>
      <Swiper
        key={startDate}
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        slidesPerView="auto"
        freeMode={true}
        initialSlide={0}
      >
        {newsArr.map((newsContent, index) => (
          <SwiperSlide key={`${startDate}-${index}`}>
            <NewsCard newsDate={startDate + index} newsContent={newsContent} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev button-prev"></div>
      <div className="swiper-button-next button-next"></div>
    </div>
  );
};

export default NewsSection;
