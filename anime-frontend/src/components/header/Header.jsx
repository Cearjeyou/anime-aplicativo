import { useState } from 'react'
import Modal from '../modal/Modal'
import styles from './Header.module.css'
import {FormControl, TextField} from '@mui/material'
import { API_URL_BACKEND } from '../../constants/contants'
import { useNavigate } from 'react-router-dom'

const apiBackend = API_URL_BACKEND

export default function Header() {
    const [inicioSesion, setInicioSesion] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [userSesion, setUserSesion] = useState({
        name: "",
        password: ""
    })
    const [isSesion, setIsSesion] = useState(false)
    const navigate = useNavigate()

    const handleInicioSesion = () => {
        if(inicioSesion) {
            setUserSesion({
                name: "",
                password: ""
            })
        }
        setInicioSesion(!inicioSesion)
    }

    const handleSignUp = () => {
        if(signUp) {
            setUserSesion({
                name: "",
                password: ""
            })
        }
        setSignUp(!signUp)
    }

    const onClickSesion = (event) => {
        event.preventDefault()
        fetch(`${apiBackend}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSesion)
        }).then(response => {
            if(response.ok) {
                response.json().then(users => {
                    setInicioSesion(!inicioSesion)
                    localStorage.setItem("username", users.name)
                    localStorage.setItem("id", users.id)
                    setIsSesion(!isSesion)
                    setUserSesion({
                        name: "",
                        password: ""
                    })
                })
            } else {
                console.log("Credenciales malas")
            }
        }).catch(error => {
            console.log("Bad fetch: ", error.message)
        })
    }

    const clickSingUp = (event) => {
        event.preventDefault()
        fetch(`${apiBackend}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSesion)
        }).then(response => {
            if(response.ok) {
                response.json().then(users => {
                    setSignUp(!signUp)
                    localStorage.setItem("username", users.name)
                    localStorage.setItem("id", users.id)
                    setIsSesion(!isSesion)
                    setUserSesion({
                        name: "",
                        password: ""
                    })
                })
            } else {
                console.log("Credenciales malas")
            }
        }).catch(error => {
            console.log("Bad fetch: ", error.message)
        })
    }

    const handleChange = (event) => {
        setUserSesion({...userSesion, [event.target.name]: event.target.value})
    }

    const signOut = () => {
        setIsSesion(!isSesion)
        setUserSesion({
            name: "",
            password: ""
        })
        localStorage.removeItem("username")
        localStorage.removeItem("id")
        navigate("/home")
    }

    const clickFavorite = () => {
        navigate("/favorite")
    }

    return (
        <>
            <nav className={styles.navbar}>
                <h1 className={styles['navbar__title']}>Anime Search</h1>
                <div className={styles['navbar__buttons']}>
                    {isSesion ? 
                    <>
                        <button onClick={clickFavorite}>Favorites</button>
                        <button onClick={signOut}>Sing Out</button>
                    </>
                    :
                    <>
                        <button onClick={handleInicioSesion}>Login</button>
                        <button onClick={handleSignUp}>Sing Up</button>
                    </> 
                }
                </div>
            </nav>
            {inicioSesion && 
                <Modal handleClosed={handleInicioSesion}>
                    <h2>Login</h2>
                    <form className={styles['modal__content']} onSubmit={onClickSesion}>
                        <FormControl fullWidth>
                            <TextField id='username' label="Username" variant='outlined' name='name' value={userSesion.name} onChange={handleChange}></TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField type='password' id='password' label="Password" variant='outlined' name='password' value={userSesion.password} onChange={handleChange}></TextField>
                        </FormControl>
                        <div>
                            <button type='submit'>login</button>
                        </div>
                    </form>
                </Modal>
            }
            {
                signUp &&
                <Modal handleClosed={handleSignUp}>
                    <h2>Sign Up</h2>
                    <form className={styles['modal__content']} onSubmit={clickSingUp}>
                        <FormControl fullWidth>
                            <TextField id='username' label="Username" variant='outlined' name='name' value={userSesion.name} onChange={handleChange}></TextField>
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField type='password' id='password' label="Password" variant='outlined' name='password' value={userSesion.password} onChange={handleChange}></TextField>
                        </FormControl>
                        <div>
                            <button type='submit'>Sign Up</button>
                        </div>
                    </form>
                </Modal>
            }
        </>
        
    )
}