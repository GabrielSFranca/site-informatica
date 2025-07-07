/*"use client";  // necessario p components do lado do cliente no Next

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


interface Event {
    id: number;
    title: string;
    desc: string;
    imageUrl: string;
}

interface CarProps {
    events: Event[];
}

export function SwiperCarousel({events}: CarProps){
    return (
        <div className="carousel">
        <Swiper
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
            breakpoints={{
                768: {slidesPerView:2},
                1024: {slidesPerView:3}
            }}
        >
            {events.map(item) => (
                <SwiperSlide key={item.id}>
                    <div className="slide">Slide 1</div>
                </SwiperSlide>
            )}
        </Swiper>


        <SwiperSlide>
            <div className="slide">Slide 2</div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slide">Slide 3</div>
        </SwiperSlide>
    </div>
    );
}*/