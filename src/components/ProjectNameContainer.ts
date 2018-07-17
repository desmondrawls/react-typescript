import {connect} from "react-redux";
import {ProjectName} from "./ProjectName";
import {Project} from "../definitions";
import {Dispatch} from "redux";
import {ProjectClickProps, ProjectProps} from "./props";
import {Actions} from "./actions";

const mapDispatchToProps = (dispatch: Dispatch): ProjectClickProps => {
  return {
    onProjectClick: (id: number) => {
      dispatch({type: Actions.SELECT_PROJECT, value: id})
    }
  }
};

export default connect<{}, ProjectClickProps, {project: Project}>(
  null,
  mapDispatchToProps
)(ProjectName);
