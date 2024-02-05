import Card from "../card/Card";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.css'
import {Virtual, Navigation, Pagination, Grid, EffectCoverflow } from 'swiper/modules';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceKissWinkHeart, faFaceSmile, faFaceGrimace } from '@fortawesome/free-regular-svg-icons'
import Modal from "../modal/Modal";
import { API_URL_BACKEND } from "../../constants/contants";

const getTexts = (animeCurrent,  scores) => {
    return scores?.filter(item => item.idAnime == animeCurrent)
}

const texts = {
    NOT_FUN: {
        texts: "I do not recommend it",
        icons: faFaceGrimace
    },
    FUN: {
        texts: "You may have fun",
        icons: faFaceSmile
    },
    GREAT: {
        texts: "Great, this is one of the best anime",
        icons: faFaceKissWinkHeart
    }
}

const apiBackend = API_URL_BACKEND

export default function Slider(props) {
    const {data, scores} = props
    const [animeCurrent, setAnimeCurrent] = useState(0);

    const changeSlide = (swiper) => {
        setAnimeCurrent(swiper.activeIndex)
    }

    const addAnime = (anime) => {
        const id = localStorage.getItem("id")
        if(id != null) {
            console.log(id)
            const bodyRequest = {
                name: anime.title,
                code: anime['mal_id'],
                urlImg: anime.images.webp?.image_url,
                score: anime.score,
                type: anime.type,
                user: {
                    id: id
                }
            }
            fetch(`${apiBackend}/animes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyRequest)
            }).then(response => {
                if(response.ok) {
                    console.log("Success")
                } else {
                    console.log("Error with fetch")
                }
            }).catch(error => {
                console.log("Error fetch: ", error.message)
            })
        } else {
            alert("you must login or register before adding to favorites")
        }
    }

    return (
        <>
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
            // slideShadows: true,
        }}
        pagination={true}
        // className="mySwiper"
        modules={[EffectCoverflow, Pagination]}
        onSlideChange={(swiper) => {
            changeSlide(swiper)
        }}
    >
        {data ?
                    data.map((anime, index) => (
                        <SwiperSlide key={anime.title} virtualIndex={index}>
                            <Card  imgUrl={anime.images.webp?.image_url} imgDescrip="img" name={anime.title} handleButton={addAnime} anime={anime}></Card>
                            {animeCurrent == index && getTexts(anime.mal_id, scores)?.map(items => (
                                <p key={items} className="swiper__texts"><FontAwesomeIcon icon={texts[items?.group].icons}></FontAwesomeIcon><span>{texts[items?.group].texts}</span><FontAwesomeIcon className="fa-regular" icon={texts[items?.group].icons}></FontAwesomeIcon></p>
                            ))}
                        </SwiperSlide>
                    ))
                    : <p>Cargado</p>}
    </Swiper>
    </>
    )
}