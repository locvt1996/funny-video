import { RootState } from "../";

export const getUserInfo = (state: RootState) => {
  return state.authen.userInfo;
};
