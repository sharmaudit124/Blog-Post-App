import React from 'react';

import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from '../components/FakePosts';


export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: PostsData
    },
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload)
        },

        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !== action.payload.id);
        },
        updatePost: (state, action) => {
            state.value.map((post) => {
                if (post.id == action.payload.id) {
                    post.title = action.payload.title;
                    post.category = action.payload.category;
                    post.description = action.payload.description;
                }
            })
        },
        likePost:(state,action)=>{
            state.value.map((post)=>{
                if (post.id == action.payload.id) {
                post.isLiked=action.payload.isLiked;
                }
            })
        }
    }
});

export const { addPost, deletePost, updatePost,likePost } = postSlice.actions;
export default postSlice.reducer;