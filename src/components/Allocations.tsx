import "babel-polyfill";
import * as React from "react";
import ProjectNameContainer from "./ProjectNameContainer";
import {AllocationsProps} from "./props";
import {ProjectSelection} from "./ProjectSelection";
import {EmptyProjectSelection} from "./EmptyProjectSelection";

export const Allocations = (props: AllocationsProps) => {
  const projectNames = () => props.projects.map(project => <ProjectNameContainer project={project}/>);
  const pivotNames = () => props.pivots.map(pivot => <h3
    key={pivot.firstName + pivot.lastName}>{pivot.firstName} {pivot.lastName}</h3>);
  const emptyProjectSelection = () => <EmptyProjectSelection/>;
  const projectSelection = (projectID: number) => <ProjectSelection projects={props.projects} projectID={projectID}/>
  return (
    <div className="mtl">
      <div className="options">
        <div>
          <h1>Projects</h1>
          {projectNames()}
        </div>
        <div>
          <h1>Pivots</h1>
          {pivotNames()}
        </div>
      </div>
      <div className="working mtl">
        <h1 className="prompt">{props.selectedProject.fold(projectSelection, emptyProjectSelection)}</h1>
      </div>
    </div>
  );
};
