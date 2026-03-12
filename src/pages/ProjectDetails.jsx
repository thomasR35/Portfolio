import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "../styles/pages/_projectDetails.scss";

import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { useProject } from "../hooks/useProjectDetails";
import AnimatedBlock from "../components/AnimatedBlock";

SwiperCore.use([Navigation, Autoplay]);

function ProjectDetails() {
  const { project } = useProject();

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>

      {project.label && (
        <p className="project-details__label">{project.label}</p>
      )}
      {project.description && (
        <p className="project-details__description">
          {Array.isArray(project.description)
            ? project.description.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < project.description.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))
            : project.description}
        </p>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="project-details__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-details__tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="project-details__links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-details__link"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {project.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${project.title} slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {project.blocks && project.blocks.length > 0 && (
        <ul className="blocks-list">
          {project.blocks.map((block, index) => (
            <AnimatedBlock key={index} block={block} />
          ))}
        </ul>
      )}

      <div className="back-button-container">
        <Link to="/projects" className="back-button">
          Retour aux projets
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;
