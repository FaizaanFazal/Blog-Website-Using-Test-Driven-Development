import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance } from '../config';
import placeholderApi from '../utils/axios-instances';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    const request = await placeholderApi.post('/users/login', userCredentials);
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response));
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.errror = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.errror = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.errror = 'Access Denied! Invalid Credentials';
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
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'Request failed with status code 401') {
          state.errror = 'Access Denied! Invalid Credentials';
        } else {
          state.errror = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;