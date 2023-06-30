import { useSwiper } from 'swiper/react';
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slidePrev()} className="absolute w-[50px] z-[50] bg-gray-400 top-[50%] translate-y-[-50%] left- opacity-60 hover:opacity-100 transition-opacity">
            <ArrowSmallLeftIcon />
        </button>
    )
}

export default SwiperButtonPrev