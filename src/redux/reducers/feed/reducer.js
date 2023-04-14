 import FeedActionTypes from "../../../actions/feed/action-types";
 const initialState = {
    posts: [],
 }

 const feedReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FeedActionTypes.GET:
          return { ...state, posts: action.posts };
        default:
          return state;
      }

 }

 export default feedReducer;