import {Pivot, Project} from "../definitions";
import {AllocationsState} from "../store/allocationsState";

export type AllocationsProps = AllocationsState
export interface ProjectProps { project: Project }
export interface ProjectClickProps { onProjectClick: (id: Number) => {} }
