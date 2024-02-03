import styles from './Card.module.css'

export default function Card(props) {
    const {imgUrl, name, imgDescrip, score} = props
    return (
        <div className={styles.card}>
            <img className={styles['card__img']} src={imgUrl} alt={imgDescrip}/>
            <p className={styles['card__name']}>{name}</p>
            <p>{score}</p>
            <div>
                <button>Detalle</button>
                <button>Guardar</button>
            </div>
        </div>
    )
}