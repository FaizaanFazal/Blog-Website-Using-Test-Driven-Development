import { createSlice } from "@reduxjs/toolkit";
import {blogs, recentArticles} from '../data/blog-posts'


const blogSlice= createSlice({
    name:'blog',
    initialState:{ 
        blogs: blogs,
        recentArticles: recentArticles
     },

    reducers:{
        createBlog(state, action) {
            state.blogs.push(action.payload)
        },
    }

});
const {actions,reducer}=blogSlice
export const { createBlog }=actions
export default reducer