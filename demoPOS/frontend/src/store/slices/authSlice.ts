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

export const login = createAsyncThunk("auth/login", async (user: User) => {
  const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);
  if (result.data.result == "ok") {
    // login success
    const { token } = result.data;
    localStorage.setItem(server.TOKEN_KEY, token);
    return result.data;
  }

  // login failed
  throw Error();
});

export const register = createAsyncThunk("auth/register", async (value: User) => {
  const result = await httpClient.post<RegisterResult>(server.REGISTER_URL, value);
  if (result.data.result === "ok") {
    return result.data;
  }

  throw Error();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  // synchronous
  reducers: {
    logout: (state: AuthState) => {
      localStorage.clear();
      state.isAuthented = false;
    },
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

    // login success
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthented = true;
      state.loginResult = action.payload;
      state.isError = false;
      state.isAuthenticating = false;
    });

    // login failed
    builder.addCase(login.rejected, (state) => {
      state.isAuthented = false;
      state.loginResult = undefined;
      state.isError = true;
      state.isAuthenticating = false;
    });

    // register
    builder.addCase(register.fulfilled, (state) => {
      state.isError = false;
    });

    // register
    builder.addCase(register.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
export const authSelector = (state: RootState) => state.authReducer;
export const { add, remove } = authSlice.actions;
