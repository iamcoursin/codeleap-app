import UserActionTypes from "../../../actions/user/action-types";

const initialState = {
  user: {
    username: "",
    title: "",
    content: "",
    isLogged: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, user: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
