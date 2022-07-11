import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                                <a href="#" className="selected">Home</a>
                                <span className={styles.line}></span>
                            </li>
                            <li>
                                <a href="#">About Me</a>
                                <span className={styles.line}></span>
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