import "babel-polyfill";
import * as React from "react";
import {Pivot, Project} from "../definitions";

export interface AllocationsProps { projects: Project[], pivots: Pivot[] }

export const Allocations = (props: AllocationsProps) => {
    const projectNames = () => props.projects.map(project => <h3 key={project.name}>{project.name}</h3>);
    const pivotNames = () => props.pivots.map(pivot => <h3 key={pivot.firstName + pivot.lastName}>{pivot.firstName} {pivot.lastName}</h3>);
    return (
        <div>
            <h1>Projects</h1>
            {projectNames()}
            <h1>Pivots</h1>
            {pivotNames()}
        </div>
    );
};