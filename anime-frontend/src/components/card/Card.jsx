import styles from './Card.module.css'

const getName = (name) => {
    if(name.length <= 18) {
        return name
    } else {
        return `${name.substr(0, 18)}...`
    }
}

export default function Card(props) {
    const {imgUrl, name, imgDescrip, anime, handleButton} = props
    return (
        <div className={styles.card}>
            <img className={styles['card__img']} src={imgUrl} alt={imgDescrip}/>
            <p className={styles['card__name']}>{getName(name)}</p>
            <div className={styles['card__containerButtons']}>
                <button className={styles['card__button']} onClick={() => handleButton(anime)}>Favorite</button>
            </div>
        </div>
    )
}