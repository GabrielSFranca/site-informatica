import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";



interface Event{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export function Carousel() {
    return (
        <Swiper slidesPerView={1} spaceBetween={20}>


        </Swiper>
    )
}