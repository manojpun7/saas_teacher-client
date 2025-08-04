import { Status } from "@/lib/global/types/global-type";
import IAuthInitialData, { IAuthData } from "@/lib/store/auth/auth-slice-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthInitialData = {
  status: Status.LOADING,
  authData: [],
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setStatus(state: IAuthInitialData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setAuthData(state: IAuthInitialData, action: PayloadAction<IAuthData[]>) {
      state.authData = action.payload;
    },
  },
});

export const { setStatus, setAuthData } = authSlice.actions;
export default authSlice.reducer;

//api calls
function teacherLogin() {
  return async function teacherLoginThunk(data: any) {
    try {
    } catch (error) {}
  };
}
