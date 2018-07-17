import * as React from "react";
import {ProjectClickProps, ProjectProps} from "./props";

export const ProjectName = (props: ProjectProps & ProjectClickProps) => {
  let onClick = () => props.onProjectClick(props.project.id);
  return (
    <h3 onClick={onClick}>{props.project.name}</h3>
  );
};
