import "./styles/main.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";

import {Allocations} from "./components/Allocations";
import {createStore} from "redux";
import {pivots, projects} from "./store/initialState";
import {allocationsStore} from "./store/reducer";
import {Provider} from 'react-redux';
import AllocationsContainer from "./components/AllocationsContainer";

const store = createStore(allocationsStore)

ReactDOM.render(
  <Provider store={store}>
    <AllocationsContainer/>
  </Provider>,
  document.getElementById("app")
);
