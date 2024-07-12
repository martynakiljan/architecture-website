
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import workImage1 from "../assets/images/works/work-1.jpg"
import workImage2 from "../assets/images/works/work-2.jpg"
import workImage3 from "../assets/images/works/work-3.jpg"
import workImage4 from "../assets/images/works/work-4.jpg"
import workImage5 from "../assets/images/works/work-5.jpg"
import workImage6 from "../assets/images/works/work-6.jpg"

const Works = () => {

    return(
        <div className="works section" id="works">
            <div className="works__inner">
                <h1 className="title">what I did recently</h1>
                <p className="works__info">Lorem ipsum dolor sit amet consectetur adipiscing elit semper curabitur,
                    ridiculus scelerisque aenean iaculis maecenas donec volutpat aptent, lacus orci primis tortor
                    vulputate mollis commodo fermentum</p>
                <div className="works__star-container">
                    <div className="works_star star-double"></div>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={workImage1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={workImage2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={workImage3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={workImage4}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={workImage5}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={workImage6}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}


export default Works;