import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import placeholderApi from '../utils/axios-instances';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    const request = await placeholderApi.post('/users/login', userCredentials);
    const { password, ...response } = await request.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    const request = await placeholderApi.post('/users/logout');
    const response = await request.data;
    localStorage.removeItem('user');
    return response;
  },
);

export const signupUser = createAsyncThunk(
  'user/register',
  async (userCredentials) => {
    const request = await placeholderApi.post('/users/register', userCredentials);
    const response = await request.data;
    return response;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: {},
    errror: null,
    isloggedin: false,
  },
  reducers: {
    getUserFromLocalStorage: (state) => {
      state.user = JSON.parse(localStorage.getItem('user')) || null;
      if (state.user?.userName) {
        state.isloggedin = true;
      } else {
        state.isloggedin = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.errror = null;
        state.isloggedin = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.errror = null;
        state.isloggedin = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isloggedin = false;
        console.log(action.error.code);
        if (action.error.code === 'ERR_BAD_REQUEST') {
          state.errror = 'Access Denied! Invalid Credentials';
          action.error.message = 'Access Denied! Invalid Credentials';
        } else {
          state.errror = action.error.message;
        }
      })// logout cases
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.errror = null;
        state.isloggedin = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isloggedin = false;
        console.log(action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.errror = 'Something went wrong';
        } else {
          state.errror = action.error.message;
        }
      })// signup cases
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.errror = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.errror = null;
        state.isloggedin=true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error);
        console.log(action.error.message);
        if (action.error.code === 'ERR_BAD_REQUEST') {
          state.errror = 'Forbideen';
          action.error.message = 'Email Already exists!';
        } else {
          state.errror = action.error.message;
        }
      });
  },
});

// export const { getUserFromLocalStorage } = userSlice.actions;
const { actions, reducer } = userSlice;
export const { getUserFromLocalStorage } = actions;
export default reducer;
