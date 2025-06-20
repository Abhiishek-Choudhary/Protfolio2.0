import styles from "./ProjectStyles.module.css";
<<<<<<< HEAD
import viber from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import Hipsster from "../../assets/hipsster.png"
import fitlift from "../../assets/fitlift.png"
import ProjectCard from "../../common/ProjectCard";
=======
import ProjectCard from "../../common/ProjectCard";
import movie from "../../assets/movie.png"
import music from "../../assets/music.png"
import chat from "../../assets/chat.png"
import whatgpt from "../../assets/whatgpt.png"
>>>>>>> 14d1c3c (final commit)

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
<<<<<<< HEAD
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
=======
          src={music}
          link="https://spotify2-0-opal.vercel.app/"
          h3="Spotify-M"
          p="Music App"
        />
        <ProjectCard
          src={movie}
          link="https://hianime7.netlify.app/"
          h3="Hianime"
          p="Movie App"
        />
        <ProjectCard
          src={chat}
          link="https://chat-app-ten-alpha-25.vercel.app/"
          h3="You Chat"
          p="Chat App"
        />
        <ProjectCard
          src={whatgpt}
          link="https://whatgpt4.netlify.app/"
          h3="Whatgpt3"
          p="AI App"
>>>>>>> 14d1c3c (final commit)
        />
      </div>
    </section>
  );
}

export default Projects;
