import { createSlice } from '@reduxjs/toolkit';
import {  featured, recentArticles } from '../data/blog-posts';
import placeholderApi from '../utils/axios-instances';


export const fetchBlogs = createAsyncThunk("blogs/all", async () => {
  const response = await placeholderApi.get('/blogs/all')
  return response.json();
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs:{},
    error:null,
    recentArticles,
    featured,
  },

  reducers: {
   async createBlog(state, action) {
      await placeholderApi.post('/blogs/add', blogdetails).then((response)=>{
        state.blogs.push(action.payload);
      }).catch((error)=>{
        state.error=error
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.error=null;
    })
    .addCase(fetchBlogs.rejected, (state, action) => {
      state.blogs = {};
      console.log(action.error.code);
      if (action.error.code === 'ERR_BAD_REQUEST') {
        state.error = 'Something went wrong';
        action.error.message = 'Something went wrong';
      } else {
        state.error = action.error.message;
      }
    });
  },

});
const { actions, reducer } = blogSlice;
export const { createBlog,fetchUsers } = actions;
export default reducer;

