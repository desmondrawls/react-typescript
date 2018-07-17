import {Maybe} from "../Maybe";
import {Pivot, Project} from "../definitions";

export interface AllocationsState {
  projects: Project[],
  pivots: Pivot[],
  selectedProject: Maybe<number>
}
