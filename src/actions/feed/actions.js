import { api } from "../../services/api/api";

import FeedActionTypes from "./action-types";
export const getPosts = () => {
     return async dispatch => {
        try {
            const res = await api.get();
            dispatch({ type: FeedActionTypes.GET, posts: res.data.results })
        } catch(error){
            dispatch({ type: FeedActionTypes.ERROR, error })
        }
     }
};

export const addPosts = (username, title, content) => {
    return async dispatch => {
       try {
           const res = await api.post( api.baseURL, {
            username: username,
            title: title,
            content: content,             
           });
           dispatch({ type: FeedActionTypes.POST, posts: res.data.results })
       } catch(error){
           dispatch({ type: FeedActionTypes.ERROR, error })
       }
    }
};
export const deletePosts = (id) => {
    return async dispatch => {
       try {
           const res = await api.delete(`/${id}/`, {            
           });
           dispatch({ type: FeedActionTypes.DELETE, posts: res.data.results })
       } catch(error){
           dispatch({ type: FeedActionTypes.ERROR, error })
       }
    }
};

