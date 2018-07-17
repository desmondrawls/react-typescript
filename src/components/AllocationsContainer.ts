import {connect} from "react-redux";
import {Allocations} from "./Allocations";
import {AllocationsState} from "../store/allocationsState";


const mapStateToProps = (state: AllocationsState): AllocationsState => {
  return state
};

export default connect(
  mapStateToProps
)(Allocations)
