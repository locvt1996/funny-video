import { createSlice } from "@reduxjs/toolkit";

// services
import { authenApi } from "./service";

// types
import { IAuthen } from "./type";

// helpers
import { setCookie } from "../../helpers/cookie";

const initialState: IAuthen = {
  loading: false,
  errorMessage: "",
  userInfo: null,
};

const { reducer, actions } = createSlice({
  name: "authen",
  initialState,
  reducers: {},
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
  },
});

export default reducer;
