import { createSlice } from '@reduxjs/toolkit';
import { blogs, featured, recentArticles } from '../data/blog-posts';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs,
    recentArticles,
    featured,
  },

  reducers: {
    createBlog(state, action) {
      state.blogs.push(action.payload);
    },
  },

});
const { actions, reducer } = blogSlice;
export const { createBlog } = actions;
export default reducer;
