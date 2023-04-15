import UserActionTypes from "./action-types";

export const loginUser = (userName) => ({
  type: UserActionTypes.LOGIN,
  payload: {
    username: userName, 
    isLogged: true
}
});
export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
  payload: {
    username: '', 
    isLogged: false
}
});

