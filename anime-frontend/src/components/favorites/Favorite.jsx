import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL_BACKEND } from "../../constants/contants";


const apiBackend = API_URL_BACKEND
export default function Favorite() {
    const navigate = useNavigate()
    const [data, setDate] = useState()
    useEffect(() => {
        const username = localStorage.getItem("username");
        if(username == null) {
            navigate("/home")
        } else {
            const id = localStorage.getItem("id")
            if(id != null) {
                fetch(`${apiBackend}/animes/${username}`, {
                    method: 'GET'
                }).then(response => {
                    if(response.ok) {
                        response.json().then(animes => {
                            setDate(animes)
                        })
                    } else {
                        console.log("Error with fetch")
                    }
                }).catch(error => {
                    console.log("Bad fetch: ", error.message)
                })
            }
        }
    })

    return (
        <Table component={Paper}>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map(anime => (
                        <TableRow key={anime.id}>
                            <TableCell>{anime.name}</TableCell>
                            <TableCell>{anime.code}</TableCell>
                            <TableCell>{anime.score}</TableCell>
                            <TableCell>{anime.type}</TableCell>
                            <TableCell><img src={anime.urlImg} alt={anime.name} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </Table>
    )
}