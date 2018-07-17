import {connect} from "react-redux";
import {ProjectName} from "./ProjectName";
import {Project} from "../definitions";
import {Dispatch} from "redux";
import {ProjectProps} from "./props";
import {Actions} from "./actions";

const mapStateToProps = (_: any, ownProps: ProjectProps) => {
  return {
    project: ownProps.project
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onProjectClick: (id: Number) => {
      dispatch({type: Actions.SELECT_PROJECT, value: id})
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectName);
