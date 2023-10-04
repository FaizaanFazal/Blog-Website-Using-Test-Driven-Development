import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../Redux/blogSlice'

const rootReducer =  {
  blog: blogReducer
  
}

const store = configureStore({
  reducer: rootReducer
})

export default store