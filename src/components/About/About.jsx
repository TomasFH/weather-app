import styles from "./About.module.css";

const About = () => {

    return(
        <div className={styles.aboutContainer}>
            <div className={styles.aboutApp}>
                <span>EN / ES</span>
                <br />
                <br />
                <h2>About:</h2>
                <br />
                <p>App created using <b>React</b>, <b>Redux (Toolkit)</b>, <b>pure CSS</b> and icons from <b>fontawesome-react (librery)    </b></p>
                <br />
                <br />
                <h2>Acerca de:</h2>
                <br />
                <p>App creada utilizando <b>React</b>, <b>Redux (Toolkit)</b>, <b>CSS puro</b> e íconos de <b>fontawesome-react     (librería)</b>. </p>
            </div>
            <div className={styles.aboutMe}>
                <span>EN / ES</span>
                <br />
                <br />
                <h2>About Me:</h2>
                <br />
                <p>My name is <b>Tomás Francisco Holgado</b>, I'm 23 years, and I'am a <b>Full Stack Web Developer</b> with <u>more experience in <b>Frontend</b></u>. If you want to know more about me, check my portfolio:
                <br />
                <a href="https://portfolio-tomasfh.vercel.app/" target="_blank" rel="noopener noreferrer">https://portfolio-tomasfh.vercel.app/</a>
                </p>
                <br />
                <br />
                <h2>Acerca de mí:</h2>
                <br />
                <p>Mi nombre es <b>Tomás Francisco Holgado</b>, tengo 23 años, soy un <b>Full Stack Web Developer</b> con <u>orientación al <b>Frontend</b></u>. Si querés saber más de mí, te dejo mi portafolio:
                <br />
                <a href="https://portfolio-tomasfh.vercel.app/" target="_blank" rel="noopener noreferrer">https://portfolio-tomasfh.vercel.app/</a>
                </p>
            </div>
        </div>
    );
};

export default About;