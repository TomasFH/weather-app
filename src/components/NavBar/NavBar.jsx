import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route, Link } from 'react-router-dom'

const NavBar = () => {
    
    // const cloud = <FontAwesomeIcon icon={"cloud"}/>;
    const cloud = <FontAwesomeIcon icon="cloud" />;
    const cloudSun = <FontAwesomeIcon icon="cloud-sun" />;
    const menuBars = <FontAwesomeIcon icon="bars" />;

    return(
        <section id={styles.home}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    {/* Menu Bars Icon */}
                    <div id={styles.menuIcon}>
                        <i>{menuBars}</i>
                    </div>
                    <h1>Weather App {cloudSun}</h1>
                    <nav id={styles.navBar} className="">
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