import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "../styles/pages/_projectDetails.scss";

import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { useProject } from "../hooks/useProjectDetails";

SwiperCore.use([Navigation, Autoplay]);

function ProjectDetails() {
  const { project } = useProject();

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        loopedSlides={project.images.length}
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

      <div className="back-button-container">
        <Link to="/projects" className="back-button">
          Retour aux projets
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;
