import Card from "../card/Card";
import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css'
// import 'swiper/css/navigation';

import {Virtual, Navigation, Pagination, Grid, EffectCoverflow } from 'swiper/modules';

export default function Slider(props) {
    const {data, scores} = props
    console.log(scores)

    return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
        modules={[EffectCoverflow, Pagination]}
    >
        {data ?
                    data.map((anime, index) => (
                        <SwiperSlide key={anime.title} virtualIndex={index}>
                            <Card  imgUrl={anime.images.webp?.image_url} imgDescrip="img" name={anime.title} score={anime.score}></Card>
                            <div>{scores?.filter(item => item.idAnime == anime.mal_id)[0]?.group}</div>
                        </SwiperSlide>
                    ))
                    : <p>Cargado</p>}
    </Swiper>
    )
}