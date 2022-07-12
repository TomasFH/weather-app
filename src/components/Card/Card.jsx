import { useSelector } from 'react-redux';
import styles from './Card.module.css';

const Card = () => {

    const cities = useSelector(state => state.ciudades);

    return (
        <section id={styles.card}>
            <div className={styles.cardContainer}>
                {
                    cities.map(c => {
                        return <div className={styles.card}>
                            <h3>{c.name}</h3>
                            <h5>Min {Math.round(c.main.temp_min)}º</h5>
                            <h5>Max {Math.round(c.main.temp_max)}º</h5>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Card;