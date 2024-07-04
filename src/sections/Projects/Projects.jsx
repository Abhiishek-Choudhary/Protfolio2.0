import styles from "./ProjectStyles.module.css";
import viber from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import Hipsster from "../../assets/hipsster.png"
import fitlift from "../../assets/fitlift.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://github.com/Abhiishek-Choudhary/Spotify"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Abhiishek-Choudhary/Spotify"
          h3="Fresh Burger"
          p="Restraunt"
        />
        <ProjectCard
          src={Hipsster}
          link="https://github.com/Abhiishek-Choudhary/Netflix-clone"
          h3="Netflix"
          p="Streaming App"
        />
        <ProjectCard
          src={fitlift}
          link="https://github.com/Abhiishek-Choudhary/WhatGPT3"
          h3="Whatgpt3"
          p="Frontend App"
        />
      </div>
    </section>
  );
}

export default Projects;
