import { GlobalAction } from '../actions/global';
import { LOADER_SHOW, LOADER_HIDE } from "../constants/actions/global";

export interface GlobalReduxState {
  loading: boolean,
}

const initialState: GlobalReduxState = {
  loading: true
};

export const globalReducer = (state: GlobalReduxState = initialState, action: GlobalAction): GlobalReduxState => {
  switch (action.type) {
    case LOADER_SHOW: {
      return {
        ...state,
        loading: true
      };
    }
    case LOADER_HIDE: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
}
