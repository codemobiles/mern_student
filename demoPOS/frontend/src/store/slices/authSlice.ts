import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResult, RegisterResult } from "@/types/auth-result.type";
import { User } from "@/types/user.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";

type AuthState = {
  count: number;
  loginResult?: LoginResult;
  registerResult?: RegisterResult;
  isAuthenticating: boolean;
  isAuthented: boolean;
  isError: boolean;
};

const initialState: AuthState = {
  count: 1,
  isAuthenticating: true,
  isAuthented: false,
  isError: false,
};

export const addAsync = createAsyncThunk("auth/addAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 1;
});

export const removeAsync = createAsyncThunk("auth/removeAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return -1;
});

export const login = async (user: User) => {
  const result = await httpClient.post<LoginResult>(server.LOGIN_URL);
  if (result.data.result == "ok") {
    // login success
    return result.data;
  }

  // login failed
  throw Error();
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // synchronous
  reducers: {
    add: (state) => {
      state.count++;
    },
    remove: (state) => {
      state.count--;
    },
  },
  // asynchronous
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.count = state.count + action.payload;
    });

    builder.addCase(removeAsync.fulfilled, (state, action) => {
      state.count = state.count + action.payload;
    });
  },
});

export default authSlice.reducer;
export const authSelector = (state: RootState) => state.authReducer;
export const { add, remove } = authSlice.actions;
