import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  posts: [],
  selectedMonth: dayjs().month() + 1,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, { payload }) => {
      const index = state.posts.findIndex((post) => post.id === payload.id);
      state.posts[index] = payload;
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
    updateSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { addPost, updatePost, deletePost, updateSelectedMonth } =
  postsSlice.actions;
export default postsSlice.reducer;
