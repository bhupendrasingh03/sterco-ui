import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import { OverviewData } from "./overviewData";
import { Link } from "react-router-dom";

const OverviewSection = () => {
    const data = OverviewData;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="home-overview">
            <div className="container">
                {/* Header */}
                <div className="overview-header">
                    <span className="eyebrow">{data.title}</span>
                    <h2>{data.description}</h2>
                </div>

                {/* MAIN CONTENT SWIPER */}
                <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={40}
                    className="overview-content-swiper"
                >
                    {data.sections.map((section) => (
                        <SwiperSlide key={section.id}>
                            <div className="content-slide">
                                <div className="content-text">
                                    <p>{section.content.description}</p>
                                    <Link to="/#" className="learn-more">
                                        <img src="/assets/icons/arrow.svg" />
                                    </Link>

                                    <div className="stats">
                                        <span className="stats-value">
                                            {section.content.stats.value}
                                        </span>
                                        <span className="stats-label">
                                            {section.content.stats.label}
                                        </span>
                                    </div>
                                </div>

                                <div className="content-image">
                                    <img
                                        src={section.content.image}
                                        alt={section.content.heading}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* NAVIGATION / TABS SWIPER */}
                <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    watchSlidesProgress
                    spaceBetween={20}
                    slidesPerView={7}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 7,
                            spaceBetween: 40
                        }
                    }}
                    className="overview-nav-swiper"
                >
                    {data.sections.map((section) => (
                        <SwiperSlide key={section.id}>
                            <button className="nav-tab">
                                <img
                                    src={section.icon}
                                    alt={section.tabLabel}
                                />
                                <span className="label">{section.tabLabel}</span>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OverviewSection;
