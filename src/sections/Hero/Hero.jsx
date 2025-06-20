import styles from "./HeroStyles.module.css";
<<<<<<< HEAD
import heroImg from "../../assets/hero-img.png";
=======
>>>>>>> 14d1c3c (final commit)
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
<<<<<<< HEAD
import CV from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
=======
import { useTheme } from "../../common/ThemeContext";
import profile from '../../../public/profile.jpeg'
import resume from '../../../public/Abhishek_Choudhary_resume.pdf'
>>>>>>> 14d1c3c (final commit)

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
<<<<<<< HEAD
          src={heroImg}
=======
          src={profile}
>>>>>>> 14d1c3c (final commit)
          alt="Profile picture of Abhishek Choudhary"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          ABHISHEK
          <br />
          CHOUDHARY
        </h1>
        <h2>FULLSTACK DEVELOPER</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://Linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am Abhishek Choudhary a full stack web developer from raipur
           and this is my protfolio.
        </p>
<<<<<<< HEAD
        <a href={CV} download>
=======
        <a href={resume} download>
>>>>>>> 14d1c3c (final commit)
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
