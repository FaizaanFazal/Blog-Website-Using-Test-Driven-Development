import { createSlice } from "@reduxjs/toolkit";
import {blogs} from '../data/blog-posts'


const blogSlice= createSlice({
    name:'blog',
    initialState:{ blogs: blogs },

    reducers:{
        create(state, action) {
            state.list.push(action.payload)
        },
    }

});
const {actions,reducer}=blogSlice
export const { create }=actions
export default reducer