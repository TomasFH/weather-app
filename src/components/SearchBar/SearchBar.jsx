import { useState } from "react";
import styles from "./SearchBar.module.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchCity } from '../../features/weather/weatherSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const SearchBar = () => {

    // Icono de lupa
    const magnifyingGlassIcon = <FontAwesomeIcon icon="magnifying-glass" />

    const globalState = useSelector(state => state.ciudades);
    const dispatch = useDispatch();

    const API = "https://api.openweathermap.org/data/2.5/weather";
    
    const [input, setInput] = useState('');
    const [loadingResults, setLoadingResults] = useState(false);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const onSubmitHandler = async () => {
        if(input === ''){
            console.log("No se ha introducido ningún valor")
        } else {
            let response;
            try {
                setLoadingResults(true);
                document.getElementById("submitBtn").classList.add(styles.disabledBtn);
                document.getElementById("submitBtn").disabled = true;
                response = await axios.get(`${API}?q=${input}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es&units=metric`);
                setInput('');
                dispatch(searchCity(response.data));
                setLoadingResults(false);
                document.getElementById("searchInput").classList.remove(styles.errorInput);
                document.getElementById("submitBtn").classList.remove(styles.disabledBtn);
                document.getElementById("submitBtn").disabled = false;
            } catch (error) {
                alert("No results found. Please, check the entered name.");
                document.getElementById("searchInput").classList.add(styles.errorInput);
                document.getElementById("submitBtn").classList.remove(styles.disabledBtn);
                document.getElementById("submitBtn").disabled = false;
            };
        };
    };

    return(
        <div className={styles.searchBarContainer}>
            <input type="text" id="searchInput" value={input} onChange={onChangeHandler} className={styles.input} placeholder="City..."/>
            <Link to="/">
            <button id="submitBtn" onClick={onSubmitHandler} className={styles.submitBtnShort}>{magnifyingGlassIcon}</button>
            <button id="submitBtn" onClick={onSubmitHandler} className={styles.submitBtn}>Search</button>
            </Link>
        </div>
    );
};

export default SearchBar;