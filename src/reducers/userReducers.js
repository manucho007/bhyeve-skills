import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

const initialState = {};
export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
