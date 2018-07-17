import {AllocationsState, initialState} from "./initialState";
import {Action} from "redux";
import {Actions} from "../components/actions";

export function allocationsStore(state = initialState, action: Action): AllocationsState {
  switch (action.type) {
    case Actions.SELECT_PROJECT:
      return state;
    default:
      return state
  }
};
