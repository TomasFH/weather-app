import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { removeCity } from '../../features/weather/weatherSlice';
import NoCityYet from '../NoCityYet/NoCityYet';
import styles from './Cards.module.css';

const Cards = () => {

    const cities = useSelector(state => state.ciudades);
    const dispatch = useDispatch();

    const onClose = (id) => {
        dispatch(removeCity(id));
    }

    // Icon list
    const weatherIcons = [
        {
            name: 'Clouds',
            id: 801,
            description: 'few clouds',
            icon: <FontAwesomeIcon icon={'cloud-sun'}/>
        },
        {
            name: 'Clouds',
            id: 802,
            description: 'scattered clouds',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Clouds',
            id: 803,
            description: 'broken clouds',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Clouds',
            id: 804,
            description: 'overcast clouds',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Thunderstorm',
            id: 200,
            description: 'thunderstorm with light rain',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 201,
            description: 'thunderstorm with rain',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 202,
            description: 'thunderstorm with heavy rain',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 210,
            description: 'light thunderstorm',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 211,
            description: 'thunderstorm',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 212,
            description: 'heavy thunderstorm',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 221,
            description: 'ragged thunderstorm',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 230,
            description: 'thunderstorm with light drizzle',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 231,
            description: 'thunderstorm with drizzle',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Thunderstorm',
            id: 232,
            description: 'thunderstorm with heavy drizzle',
            icon: <FontAwesomeIcon icon={'thunderstorm'}/>
        },
        {
            name: 'Drizzle',
            id: 300,
            description: 'light intensity drizzle',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 301,
            description: 'drizzle',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 302,
            description: 'heavy intensity drizzle',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 310,
            description: 'light intensity drizzle rain',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 311,
            description: 'drizzle rain',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 312,
            description: 'heavy intensity drizzle rain',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 313,
            description: 'shower rain and drizzle',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 314,
            description: 'heavy shower rain and drizzle',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Drizzle',
            id: 321,
            description: 'shower drizzle',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Rain',
            id: 500,
            description: 'light rain',
            icon: <FontAwesomeIcon icon={'cloud-rain'}/>
        },
        {
            name: 'Rain',
            id: 501,
            description: 'moderate rain',
            icon: <FontAwesomeIcon icon={'cloud-rain'}/>
        },
        {
            name: 'Rain',
            id: 502,
            description: 'heavy intensity rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 503,
            description: 'very heavy rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 504,
            description: 'extreme rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 511,
            description: 'freezing rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 520,
            description: 'light intensity shower rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 521,
            description: 'shower rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 522,
            description: 'heavy intensity shower rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Rain',
            id: 531,
            description: 'ragged shower rain',
            icon: <FontAwesomeIcon icon={'cloud-showers-heavy'}/>
        },
        {
            name: 'Snow',
            id: 600,
            description: 'Light snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 601,
            description: 'Snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 602,
            description: 'Heavy snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 611,
            description: 'Sleet',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 612,
            description: 'Light shower sleet',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 613,
            description: 'Shower sleet',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 615,
            description: 'Light rain and snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 616,
            description: 'Rain and snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 620,
            description: 'Light shower snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 621,
            description: 'Shower snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Snow',
            id: 622,
            description: 'Heavy shower snow',
            icon: <FontAwesomeIcon icon={'snowflake'}/>
        },
        {
            name: 'Mist',
            id: 701,
            description: 'mist',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Smoke',
            id: 711,
            description: 'Smoke',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Haze',
            id: 721,
            description: 'Haze',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Dust',
            id: 731,
            description: 'Dust',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Fog',
            id: 741,
            description: 'Fog',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Sand',
            id: 751,
            description: 'Sand',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Dust',
            id: 761,
            description: 'Dust',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Ash',
            id: 762,
            description: 'Ash',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Squall',
            id: 771,
            description: 'Squall',
            icon: <FontAwesomeIcon icon={'cloud'}/>
        },
        {
            name: 'Tornado',
            id: 781,
            description: 'Tornado',
            icon: <FontAwesomeIcon icon={'tornado'}/>
        },
        {
            name: 'Clear',
            id: 800,
            description: 'clear sky',
            icon: <FontAwesomeIcon icon={'sun'}/>
        },

    ]

    if(!cities.length) {
        return(
            <section id={styles.nothingHere}>
                <NoCityYet />
            </section>
        )
    }

    return (
        <section id={styles.cards}>
            <div className={styles.cardsContainer}>
                {
                    cities.map(c => {
                        return <div className={styles.cards} key={c.id}>
                            <div className={styles.cityName}>
                                <h3>{c.name}</h3>
                            </div>
                            <div className={styles.tempContainer}>
                                <h5>Min {Math.round(c.main.temp_min)}º</h5>
                                <h5>Max {Math.round(c.main.temp_max)}º</h5>
                            </div>
                            <div className={styles.closeBtnContainer}>
                                <button onClick={() => onClose(c.id)} className={styles.closeBtn}>X</button>
                            </div>
                            <div className={styles.iconContainer}>
                                {
                                    <span>{weatherIcons.find(w => w.id === c.weather[0].id)?.icon || c.weather[0].main}</span> 
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Cards;