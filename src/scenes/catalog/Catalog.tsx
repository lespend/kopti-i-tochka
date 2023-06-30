import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper';
import SwiperButtonNext from "../../components/SwiperButtonNext";
import SwiperButtonPrev from "../../components/SwiperButtonPrev";
import Image1 from '../../assets/catalog/1.jpg'
import Image2 from '../../assets/catalog/2.jpg'
import Image3 from '../../assets/catalog/3.jpg'
import Image4 from '../../assets/catalog/4.jpg'
import Image5 from '../../assets/catalog/5.jpg'
import Image6 from '../../assets/catalog/6.jpg'

type Props = {}

const Catalog = (props: Props) => {
    return (
        <section className='catalog py-8 pb-16 bg-brown-400 text-white' id="catalog">
            <div className='container'>
                <SectionHeader className='bg-brown-400'>Наши коптильни</SectionHeader>
                <div className='flex gap-8 flex-col items-center xl:flex-row'>
                    <div className='max-w-[500px] w-full'>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <img src={Image1} alt="Коптильня" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Image2} alt="Коптильня" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Image3} alt="Коптильня" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Image4} alt="Коптильня" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Image5} alt="Коптильня" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Image6} alt="Коптильня" />
                            </SwiperSlide>
                            <SwiperButtonPrev />
                            <SwiperButtonNext />
                        </Swiper>
                    </div>
                    <div className='flex gap-8 flex-col md:flex-row items-center'>
                        <div className='md:w-[50%] flex flex-col gap-4 text-center'>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Сочетается</h3>
                                <p className='text-[18px]'>с экстерьерами загородных домов и барбекю зонами</p>
                            </div>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Подходит</h3>
                                <p className='text-[18px]'>для бизнеса и личного пользования</p>
                            </div>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Доступна</h3>
                                <p className='text-[18px]'>в разных цветовых решениях</p>
                            </div>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Спецзаказ</h3>
                                <p className='text-[18px]'>возможно изготовление на заказ</p>
                            </div>
                        </div>
                        <div className='md:w-[50%] flex flex-col gap-4 text-center'>
                            <div>
                                <h3 className='text-primary-300 uppercase'>4 функции в 1</h3>
                                <p className='text-[18px]'>копчение холодное и горячее, сушка и вяление продуктов</p>
                            </div>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Объем</h3>
                                <p className='text-[18px]'>поможем подобрать нужный объем</p>
                            </div>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Вес</h3>
                                <p className='text-[18px]'>от 5 до 100 кг</p>
                            </div>
                            <div>
                                <h3 className='text-primary-300 uppercase'>Изготовление</h3>
                                <p className='text-[18px]'>от одного дня в зависимости от сложности заказа</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog