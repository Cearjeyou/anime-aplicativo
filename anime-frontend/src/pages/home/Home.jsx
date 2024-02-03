import { Outlet } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home () {
    return (
        <>
            <header></header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
        
    )
}