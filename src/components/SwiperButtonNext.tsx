import React from 'react'
import { useSwiper } from 'swiper/react';
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()} className="absolute w-[50px] z-[50] bg-gray-400 top-[50%] translate-y-[-50%] right-0 opacity-60 hover:opacity-100 transition-opacity">
            <ArrowSmallRightIcon />
        </button>
    )
}

export default SwiperButtonNext