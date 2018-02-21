import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

function enthusiasm(
  state: StoreState = { languageName: "Typescript", enthusiasmLevel: 2 },
  action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  app: enthusiasm,
  routing: routerReducer
});

export default rootReducer;
