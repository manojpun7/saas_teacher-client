import api from "@/lib/global/http/api";
import { Status } from "@/lib/global/types/global-type";
import IAuthInitialData, {
  IAuthData,
  IAuthLoginData,
} from "@/lib/store/auth/auth-slice-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

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
export function teacherLogin(data: IAuthLoginData) {
  return async function teacherLoginThunk(dispatch: AppDispatch) {
    try {
      const response = await api.post("/auth/teacher-login", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
}
