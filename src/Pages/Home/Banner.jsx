import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../../assets/banner-img/photo.webp'
import img2 from '../../assets/banner-img/57d2ac552446dc3e1362509d6261a234.jpeg'
import img3 from '../../assets/banner-img/994392-Warcraft-2016-Movie-2K.jpg'
import img4 from '../../assets/banner-img/fc829663851296fef905684909404baf.jpeg'
import img5 from '../../assets/banner-img/taken-3-1.jpg'
import img6 from '../../assets/banner-img/the-railway-man-quad-movie-poster-01-4000x3000-2048x1536.jpg'
import img7 from '../../assets/banner-img/widescreen_1680x1050.jpg'

import { Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <h3 className="text-center text-4xl border-b-4 border-b-[#f4626e] w-fit mx-auto my-16">Trending Movies </h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className="h-[700px] w-[100vw]" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[700px] w-[100vw]"  src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[700px] w-[100vw]" src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[700px] w-[100vw]" src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[700px] w-[100vw]" src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[700px] w-[100vw]" src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[700px] w-[100vw]" src={img7} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
