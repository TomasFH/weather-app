import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route, Link } from 'react-router-dom'
import { useState } from "react";

const NavBar = () => {
    
    // const cloud = <FontAwesomeIcon icon={"cloud"}/>;
    const cloud = <FontAwesomeIcon icon="cloud" />;
    const cloudSun = <FontAwesomeIcon icon="cloud-sun" />;
    const menuBars = <FontAwesomeIcon icon="bars" />;

    // Inicialmente, el menú no estará desplegado (false). Cuando esté en true se mostrará el menú desplegado.
    const [menu, setMenu] = useState(false);

    const onClickMenuHandler = () => {
        console.log("Mostrando menú");
        setMenu(!menu);
    };

    const onCloseMenuHandler = () => {
        if(menu){
            console.log("El menú está abierto, voy a cerrarlo");
            setMenu(false);
        }
    }

    return(
        <section id={styles.home}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    {/* Menu Bars Icon */}
                    <div id={styles.menuIcon} onClick={onClickMenuHandler}>
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
                {/* Menú desplegable */}
                <div id="menuContainer">
                    <nav id={styles.menu} className={!menu? styles.navMenu : styles.openedMenu}>
                        <ul>
                            <li>
                                <Link to="/" className={styles.link} onClick={onCloseMenuHandler}>
                                    Home 
                                    <span className={styles.line}></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={styles.link} onClick={onCloseMenuHandler}>
                                    About
                                    <span className={styles.line}></span>
                                </Link>
                            </li>
                        </ul>
                        <button className={styles.closeMenu} onClick={onCloseMenuHandler}>X</button>
                    </nav>
                </div>
            </header>
        </section>
    );
};

export default NavBar;