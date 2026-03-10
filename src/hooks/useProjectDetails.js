// ============================================================
// useProjectDetails.js — hook données projet
// ============================================================

import { useParams } from "react-router-dom";
import { projects } from "../data/projectDetailsData";

export function useProject() {
  const { projectId } = useParams();

  const project = projects[projectId];

  return { project };
}
