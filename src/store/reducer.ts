import {initialState} from "./initialState";
import {Action} from "redux";
import {Actions} from "../components/actions";
import {AllocationsState} from "./allocationsState";
import {Maybe} from "../Maybe";

export interface Value<T = any> { value: T }

export function allocationsStore(state = initialState, action: Action & Value): AllocationsState {
  switch (action.type) {
    case Actions.SELECT_PROJECT:
      return Object.assign({}, state, {selectedProject: Maybe.some(action.value)});
    default:
      return state
  }
};
