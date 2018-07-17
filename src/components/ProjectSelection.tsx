import {Project} from "../definitions";
import * as React from "react";
import {ProjectSelectionProps} from "./props";

export const ProjectSelection = (props: ProjectSelectionProps) => {
    const project = props.projects.find(project => project.id === props.projectID);
    return (
      <div>Who wants to work on {project.name}?</div>
    );
}
