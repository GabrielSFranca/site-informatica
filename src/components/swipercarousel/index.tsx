"use client";  // necessario p components do lado do cliente no Next

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


/*interface Event {
    id: number;
    title: string;
    desc: string;
    imageUrl: string;
}

interface CarProps {
    events: Event[];
}*/

export function SwiperCarousel(){
    return (
        <div className="carousel">
        <Swiper
            className="mySwiper"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            autoplay={{
                delay:5000, 
                disableOnInteraction: false 
            }}
            loop
        >
            <SwiperSlide>
                <div className="slide-swiper">Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-swiper">Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-swiper">Slide 3</div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
}