import React from "react";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link}>
<<<<<<< HEAD
      <img className="hover" src={src} alt={`${h3} logo`} />
=======
      <img style={{height:180}} className="hover" src={src} alt={`${h3} logo`} />
>>>>>>> 14d1c3c (final commit)
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
