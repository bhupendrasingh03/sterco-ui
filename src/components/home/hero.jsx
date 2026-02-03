
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

export default function Hero() {
    return (
        <div className='hero-wrapper'>
            <Swiper
                spaceBetween={30}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination, Autoplay]}
                className="mySwiper"
            >
                {[
                    "/assets/hero1.png",
                    "/assets/hero2.png",
                    "/assets/hero1.png",
                    "/assets/hero2.png",
                ].map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className='slide-img'>
                            <img
                                src={src}
                                alt={`hero-${index + 1}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
