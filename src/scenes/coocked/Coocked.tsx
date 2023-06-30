import SectionHeader from "../../components/SectionHeader"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper';
import CoockedBlock from "./CoockedBlock";
import Image1 from '../../assets/Group_48.jpg';
import Image2 from '../../assets/Group_49.jpg';
import Image3 from '../../assets/Group_50_1.jpg';
import Image4 from '../../assets/Group_51.jpg';
import Image5 from '../../assets/Group_52.jpg';
import Image6 from '../../assets/Group_53.jpg';
import Image7 from '../../assets/Group_54.jpg';
import Image8 from '../../assets/Group_55.jpg';
import SwiperButtonNext from "../../components/SwiperButtonNext";
import SwiperButtonPrev from "../../components/SwiperButtonPrev";


type Props = {}

const Coocked = (props: Props) => {

    return (
        <section className="container pb-16 mt-8">
            <SectionHeader className="bg-white">Сможете готовить сами</SectionHeader>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                loop
                breakpoints={{
                    440: {
                        slidesPerView: 1.5
                    },
                    680: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    },
                    948: {
                        slidesPerView: 3
                    }
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <CoockedBlock image={Image1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image7}/>
                </SwiperSlide>
                <SwiperSlide>
                    <CoockedBlock image={Image8}/>
                </SwiperSlide>
                <SwiperButtonPrev/>
                <SwiperButtonNext/>                
            </Swiper>
        </section>
    )
}

export default Coocked