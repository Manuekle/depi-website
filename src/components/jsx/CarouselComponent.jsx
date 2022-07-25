import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper";

function CarouselComponent() {
  const [media, setMedia] = useState(3);
  useEffect(() => {
    if (screen.width < 768) {
      setMedia(1);
    }
  });

  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={media}
        navigation={true}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
      >
        <SwiperSlide>
          <div className="flex flex-row justify-center pr-3 pl-3 lg:pr-1 lg:pl-1">
            <img
              src="https://www.depisas.com/wp-content/uploads/2019/06/IMG-20171218-WA0012-370x250.jpg"
              alt="img1"
              className="w-80 rounded-lg shadow-lg shadow-slate-200/100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center pr-3 pl-3 lg:pr-1 lg:pl-1">
            <img
              src="https://www.depisas.com/wp-content/uploads/2019/06/IMG-20171218-WA0018-370x250.jpg"
              alt="img2"
              className="w-80 rounded-lg shadow-lg shadow-slate-200/100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center pr-3 pl-3 lg:pr-1 lg:pl-1">
            <img
              src="https://www.depisas.com/wp-content/uploads/2019/06/IMG-20171218-WA0021-370x250.jpg"
              alt="img3"
              className="w-80 rounded-lg shadow-lg shadow-slate-200/100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center pr-3 pl-3 lg:pr-1 lg:pl-1">
            <img
              src="https://www.depisas.com/wp-content/uploads/2019/06/IMG_3089-370x250.jpg"
              alt="img4"
              className="w-80 rounded-lg shadow-lg shadow-slate-200/100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center pr-3 pl-3 lg:pr-1 lg:pl-1">
            <img
              src="https://www.depisas.com/wp-content/uploads/2019/06/IMG-20171218-WA0016-370x250.jpg"
              alt="img5"
              className="w-80 rounded-lg shadow-lg shadow-slate-200/100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center pr-3 pl-3 lg:pr-1 lg:pl-1">
            <img
              src="https://www.depisas.com/wp-content/uploads/2019/06/IMG_3087-370x250.jpg"
              alt="img6"
              className="w-80 rounded-lg shadow-lg shadow-slate-200/100"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarouselComponent;
