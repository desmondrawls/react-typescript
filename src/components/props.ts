import {Pivot, Project} from "../definitions";

export interface AllocationsProps { projects: Project[], pivots: Pivot[] }
export interface ProjectProps { project: Project }
export interface ProjectClickProps { onProjectClick: (id: Number) => {} }
