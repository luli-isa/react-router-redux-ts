import { Reducer } from "redux";
import { RouterState } from "react-router-redux";

export interface RootState {
    app: StoreState;
    routing?: Reducer<RouterState>;
}

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}
