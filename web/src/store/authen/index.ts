import { createSlice } from "@reduxjs/toolkit";

// services
import { authenApi, tryLoginApi } from "./service";

// types
import { IAuthen } from "./type";

// helpers
import { setCookie, deleteCookie } from "../../helpers/cookie";

const initialState: IAuthen = {
  loading: false,
  errorMessage: "",
  userInfo: null,
};

const { reducer, actions } = createSlice({
  name: "authen",
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.userInfo = null;
      deleteCookie("token");
    },
  },
  extraReducers: (builder) => {
    // AUTHENTICATION
    builder.addCase(authenApi.pending, (state) => {
      state.loading = true;
      state.errorMessage = "";
    });
    builder.addCase(authenApi.fulfilled, (state, action) => {
      const { userInfo, token } = action?.payload as any;
      state.loading = false;
      state.errorMessage = "";
      state.userInfo = userInfo;
      setCookie("token", token, 90);
    });
    builder.addCase(authenApi.rejected, (state, action) => {
      const { data } = action?.payload as any;
      state.loading = false;
      state.errorMessage = data?.message;
    });

    // TRY LOGIN
    builder.addCase(tryLoginApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(tryLoginApi.fulfilled, (state, action) => {
      const { userInfo } = action?.payload as any;
      state.loading = false;
      state.userInfo = userInfo;
    });
    builder.addCase(tryLoginApi.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

const { logoutAction } = actions;

export { logoutAction };

export default reducer;
