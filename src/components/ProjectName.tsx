import {Project} from "../definitions";
import * as React from "react";
import {ProjectClickProps, ProjectProps} from "./props";

export const ProjectName = (props: ProjectProps & ProjectClickProps) => <h3>{props.project.name}</h3>;
