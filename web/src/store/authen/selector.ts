import { RootState } from "../";

export const getUserInfo = (state: RootState) => {
  return state.authen.userInfo;
};

export const getLoadingAuthen = (state: RootState) => {
  return state.authen.loading;
};
