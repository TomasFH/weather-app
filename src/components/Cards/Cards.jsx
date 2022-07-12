import { useDispatch, useSelector } from 'react-redux';
import { removeCity } from '../../features/weather/weatherSlice';
import styles from './Cards.module.css';

const Cards = () => {

    const cities = useSelector(state => state.ciudades);
    const dispatch = useDispatch();

    const onClose = (id, city) => {
        console.log(id, city);
        dispatch(removeCity(id));
    }

    return (
        <section id={styles.cards}>
            <div className={styles.cardsContainer}>
                {
                    cities.map(c => {
                        return <div className={styles.cards} key={c.id}>
                            <h3>{c.name}</h3>
                            <h5>Min {Math.round(c.main.temp_min)}º</h5>
                            <h5>Max {Math.round(c.main.temp_max)}º</h5>
                            <button onClick={() => onClose(c.id, c.name)}>X</button>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Cards;