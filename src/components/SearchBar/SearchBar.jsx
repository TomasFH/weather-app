import { useState } from "react";
import styles from "./SearchBar.module.css";
import axios from 'axios';


const SearchBar = () => {

    const API = "https://api.openweathermap.org/data/2.5/weather"
    
    const [input, setInput] = useState('');
    const [loadingResults, setLoadingResults] = useState(false);

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const onSubmitHandler = async () => {
        if(input === ''){
            console.log("No se ha introducido ninguna ciudad.");
        } else {
            console.log("Buscando info de " + input);
            let response;
            try {
                setLoadingResults(true);
                response = await axios.get(`${API}?q=${input}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es&units=metric`);
                console.log(response.data);
                setInput('');
                setLoadingResults(false);
            } catch (error) {
                alert("No se encontraron resultados. Por favor revisa la ciudad ingresada.");
            };
        };
    };

    return(
        <div>
            <input type="text" value={input} onChange={onChangeHandler} className={styles.input} placeholder="City..."/>
            <button onClick={onSubmitHandler} className={styles.submitBtn}>Search</button>
        </div>
    );
};

export default SearchBar;