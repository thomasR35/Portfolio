import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

export function useProject() {
  const { projectId } = useParams();

  const project = projects[projectId];

  return {
    project,
  };
}
