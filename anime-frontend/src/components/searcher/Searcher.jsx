import { useEffect, useState } from "react"
import { API_URL_ANIME, API_URL_BACKEND } from "../../constants/contants"
import Slider from "../slider/Slider"

const getData = (setData, name, setScores, apiUrl) => {
    fetch(`${apiUrl}/anime?q=${name}&sfw`, {
        method: 'GET'
    }).then(response => {
        if(response.ok) {
            response.json().then(animes => {
                setData(animes.data)
                const scores = animes.data.map(anime => (
                    {
                        idAnime: anime.mal_id,
                        score: anime.score != null ? anime.score : 0
                    }
                ))
                getScores(setScores, scores, apiBackend)
            })
        } else {
            console.log("Error with fetch api anime")
        }
    }).catch(error => {
        console.log("Bad request: ", error.message)
    })
}

const getScores = (setScores, scores, apiUrl) => {
    fetch(`${apiUrl}/animes/score`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(scores)
    }).then(response => {
        if(response.ok) {
            response.json().then(dataScore => {
                setScores(dataScore)
            })
        } else {
            console.log("Error with fetch scores animes")
        }
    }).catch(error => {
        console.log("Bad request score in animes", error.message)
    })
}

const apiUrl = API_URL_ANIME
const apiBackend = API_URL_BACKEND

export default function Searcher() {
    const [data, setData] = useState()
    const [name, setName] = useState("")
    const [scores, setScores] = useState()
    
    const handleSearch = (event) => {
        event.preventDefault()
        getData(setData, name, setScores, apiUrl)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        getData(setData, name, setScores, apiUrl)
    }, [])

    return (
        <section>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Type the name of anime" value={name} onChange={handleChange}/>
                <button type="submit">Buscar</button>
            </form>
            <Slider data={data} scores={scores}></Slider>
        </section>
    )
}