import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../../assets/slider-img/336921967_117173351251814_2363652417192821952_n.jpg";
import img2 from "../../assets/slider-img/Adv. Achinta Aich (2024).jpeg";
import img3 from "../../assets/slider-img/american psycho 2000.jpeg";
import img4 from "../../assets/slider-img/Bade_Miyan_Chote_Miyan_film_poster.jpg";
import img5 from "../../assets/slider-img/Crazy.Rich.Asians.2018.jpeg";
import img6 from "../../assets/slider-img/journey 2 the mysterious island 2012.jpeg";
import img7 from "../../assets/slider-img/Murder.In.Mahim.jpeg";
import img8 from "../../assets/slider-img/Rumi (2024).jpg";
import img9 from "../../assets/slider-img/Scoop_(2024_film)_poster.png";
import img10 from "../../assets/slider-img/The Garfield Movie (2024).jpg";
import img11 from "../../assets/slider-img/Tujhpe.Main.Fida.jpeg";
const Slider = () => {
  return (
    <div className="text-white">
      <h2 className="text-white text-center text-3xl  border-b-4 w-fit mx-auto uppercase border-b-[#f4626e] mb-10 ">
        Movie Of The Month
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="h-20 w-6">
          <SwiperSlide>
            <img className="image-full   lg:h-[600px]" src={img1} alt="" />
          </SwiperSlide>
        </div>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full " src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full  lg:h-[600px]" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-full lg:h-[600px]" src={img11} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
