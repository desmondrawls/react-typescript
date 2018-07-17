import "babel-polyfill";
import * as React from "react";
import ProjectNameContainer from "./ProjectNameContainer";
import {AllocationsProps} from "./props";

export const Allocations = (props: AllocationsProps) => {
    const projectNames = () => props.projects.map(project => <ProjectNameContainer project={project}/>);
    const pivotNames = () => props.pivots.map(pivot => <h3 key={pivot.firstName + pivot.lastName}>{pivot.firstName} {pivot.lastName}</h3>);
    const emptyProjectSelection = () => <div>You haven't selected a project yet</div>;
    const projectSelection = (projectID: number) => {
       const project = props.projects.find(project => project.id === projectID);
       return (
         <div>Who wants to work on {project.name}?</div>
       );
    };
    return (
        <div>
            <h1>Projects</h1>
            {projectNames()}
            <h1>Pivots</h1>
            {pivotNames()}
            <h1 className="working">{props.selectedProject.fold(projectSelection, emptyProjectSelection)}</h1>
        </div>
    );
};
