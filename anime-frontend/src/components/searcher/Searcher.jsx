import { useEffect, useState } from "react"
import { API_URL_ANIME } from "../../constants/contants"
import Slider from "../slider/Slider"

const getData = (setData, name, apiUrl) => {
    fetch(`${apiUrl}/anime?q=${name}&sfw`, {
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
}

const apiUrl = API_URL_ANIME

export default function Searcher() {
    const [data, setData] = useState()
    const [name, setName] = useState("")
    
    const handleSearch = (event) => {
        event.preventDefault()
        getData(setData, name, apiUrl)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        getData(setData, name, apiUrl)
    }, [])

    return (
        <section>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Type the name of anime" value={name} onChange={handleChange}/>
                <button type="submit">Buscar</button>
            </form>
            <Slider data={data}></Slider>
        </section>
    )
}