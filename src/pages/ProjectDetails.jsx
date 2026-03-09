import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "../styles/pages/_projectDetails.scss";
import SwiperCore from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function ProjectDetails() {
  const { projectId } = useParams();

  const projects = {
    shortly: {
      title: "Shortly",
      images: [
        "/images/shortly/shortly1.png",
        "/images/shortly/shortly2.png",
        "/images/shortly/shortly3.png",
      ],
    },
    ferme: {
      title: "La ferme des possibles",
      images: [
        "/images/ferme/ferme1.png",
        "/images/ferme/ferme2.png",
        "/images/ferme/ferme3.png",
        "/images/ferme/ferme4.png",
        "/images/ferme/ferme5.png",
        "/images/ferme/ferme6.png",
        "/images/ferme/ferme7.png",
        "/images/ferme/ferme8.png",
        "/images/ferme/ferme9.png",
      ],
    },
    league: {
      title: "League",
      images: [
        "/images/league/league1.png",
        "/images/league/league2.png",
        "/images/league/league3.png",
        "/images/league/league4.png",
        "/images/league/league5.png",
        "/images/league/league6.png",
        "/images/league/league7.png",
      ],
    },
  };

  const project = projects[projectId];

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
        loopedslides={project.images.length}
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
