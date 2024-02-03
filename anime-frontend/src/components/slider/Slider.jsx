import { useEffect, useState } from "react";
import Card from "../card/Card";
import { API_URL_ANIME } from "../../constants/contants";
import styles from './Slider.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Virtual, Navigation, Pagination } from 'swiper/modules';

const apiUrl = API_URL_ANIME

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider() {
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch(apiUrl, {
            method: 'GET'
        }).then(response => {
            if(response.ok) {
                response.json().then(animes => {
                    setData(animes.data)
                })
            } else {
                console.log("Error with fetch api anime")
            }
        }).catch(error => {
            console.log("Bad request: ", error.message)
        })
    }, [])

    return (
        <section>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    type: 'fraction'
                }}
                navigation={true}
                virtual
            >
                {data ?
                    data.map((anime, index) => (
                        <SwiperSlide key={anime.title} virtualIndex={index}>
                            <Card  imgUrl={anime.images.webp?.image_url} imgDescrip="img" name={anime.title} score={anime.score}></Card>
                        </SwiperSlide>
                    ))
                    : <p>Cargado</p>}
            </Swiper>
        </section>
        
    )
}