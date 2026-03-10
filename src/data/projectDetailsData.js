export function ProjectDetails() {
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
}
