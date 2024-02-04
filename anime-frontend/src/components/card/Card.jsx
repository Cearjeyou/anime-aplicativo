import styles from './Card.module.css'

const getName = (name) => {
    if(name.length <= 18) {
        return name
    } else {
        return `${name.substr(0, 18)}...`
    }
}

export default function Card(props) {
    const {imgUrl, name, imgDescrip, score} = props
    return (
        <div className={styles.card}>
            <img className={styles['card__img']} src={imgUrl} alt={imgDescrip}/>
            <p className={styles['card__name']}>{getName(name)}</p>
            <p>{score}</p>
            <div className={styles['card__containerButtons']}>
                <button>Detalle</button>
                <button>Guardar</button>
            </div>
        </div>
    )
}