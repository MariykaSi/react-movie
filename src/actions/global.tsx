import {
  REQUEST_START,
  REQUEST_END,
  LOADER_SHOW,
  LOADER_HIDE
} from "../constants/actions/global";

export interface RequestStart {
  type: REQUEST_START;
}

export interface RequestEnd {
  type: REQUEST_END;
}

export interface ShowLoader {
  type: LOADER_SHOW;
}

export interface HideLoader {
  type: LOADER_HIDE;
}

export type GlobalAction = RequestStart | RequestEnd | ShowLoader | HideLoader;

export const requestStart = (): RequestStart => ({
  type: REQUEST_START
});

export const requestEnd = (): RequestEnd => ({
  type: REQUEST_END
});

export const showLoader = (): ShowLoader => ({
  type: LOADER_SHOW
});

export const hideLoader = (): HideLoader => ({
  type: LOADER_HIDE
});
