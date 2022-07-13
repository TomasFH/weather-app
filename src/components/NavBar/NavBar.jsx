import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route, Link } from 'react-router-dom'

const NavBar = () => {
    
    // const cloud = <FontAwesomeIcon icon={"cloud"}/>;
    const cloud = <FontAwesomeIcon icon="cloud" />;
    const cloudSun = <FontAwesomeIcon icon="cloud-sun" />;

    return(
        <section id="home">
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <h1>Weather App {cloudSun}</h1>
                    <nav id="navBar" className="">
                        <ul>
                            <li>
                                <Link to="/" className={styles.link}>
                                    Home 
                                    <span className={styles.line}></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={styles.link}>
                                    About
                                    <span className={styles.line}></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <SearchBar />
                </div>
            </header>
        </section>
    );
}

export default NavBar;