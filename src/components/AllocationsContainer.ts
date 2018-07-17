import {AllocationsState} from "../store/initialState";
import {connect} from "react-redux";
import {Allocations} from "./Allocations";


const mapStateToProps = (state: AllocationsState): AllocationsState => {
  return state
};

export default connect(
  mapStateToProps
)(Allocations)
