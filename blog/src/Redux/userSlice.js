import { createSlice } from '@reduxjs/toolkit';





export const loginUser=CreateAsyncThunk(
    'users/login',
    //todo
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading:false,
    user:null,
    errror:null
  }
});

export default userSlice.reducer;
