import "babel-polyfill";
import * as React from "react";
import {Pivot, Project} from "../definitions";
import ProjectNameContainer from "./ProjectNameContainer";
import {AllocationsProps} from "./props";

export const Allocations = (props: AllocationsProps) => {
    const projectNames = () => props.projects.map(project => <ProjectNameContainer project={project}/>);
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
