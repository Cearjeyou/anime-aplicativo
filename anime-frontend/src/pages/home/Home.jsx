import { Outlet } from 'react-router-dom'
import styles from './Home.module.css'
import Header from '../../components/header/Header'

export default function Home () {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </>
        
    )
}