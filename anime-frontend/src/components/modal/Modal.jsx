import styles from './Modal.module.css'

export default function Modal(props) {
    return (
        <div className={styles.modal}>
            <div className={styles['modal__content']}>
                {props.children}
                <button className={styles['modal__button']} onClick={props.handleClosed}>X</button>
            </div>
        </div>
    )
}