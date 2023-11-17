import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { featured, recentArticles } from '../data/blog-posts';
import placeholderApi from '../utils/axios-instances';

export const fetchBlogs = createAsyncThunk('blogs/all', async () => {
  const response = await placeholderApi.get('/blogs/all');
  return response.data;
});

export const createBlogs = createAsyncThunk('blogs/add', async (blog) => {
  const request = await placeholderApi.post('/blogs/add', blog);
  if (request.status === '200') {
    return request;
  }
  return request.data;
});

export const likeBlog = createAsyncThunk('likes/', async (ids) => {
  const request = await placeholderApi.post('/likes/', ids);
  if (request.status === '200') {
    return request;
  }
  return request.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
    error: null,
    recentArticles,
    featured,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.error = null;
    })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.blogs = {};
        if (action.error.code === 'ERR_BAD_REQUEST') {
          state.error = 'Something went wrong';
          action.error.message = 'Something went wrong';
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(createBlogs.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
        state.error = null;
      })
      .addCase(createBlogs.rejected, (state, action) => {
        if (action.error.code === 'ERR_BAD_REQUEST') {
          state.error = 'Something went wrong';
          action.error.message = 'failed/Slug must be unique';
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(likeBlog.fulfilled, (state) => {
        state.error = null;
      })
      .addCase(likeBlog.rejected, (state, action) => {
        if (action.error.code === 'ERR_BAD_REQUEST') {
          state.error = 'Something went wrong';
          action.error.message = 'failed to like or unlike';
        } else {
          state.error = action.error.message;
        }
      });
  },

});
const { actions, reducer } = blogSlice;
export const { fetchUsers } = actions;
export default reducer;
