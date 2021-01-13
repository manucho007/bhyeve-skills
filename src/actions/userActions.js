import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_COMPLETE_PROFILE_REQUEST,
  USER_COMPLETE_PROFILE_SUCCESS,
  USER_COMPLETE_PROFILE_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from '../constants/userConstants';
import axios from 'axios';

export const signIn = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const data = await axios.post('https://be.bhyve-app.com:3020/user/signin', {
      username,
      password,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data.data.user));
    localStorage.setItem('userToken', JSON.stringify(data.data.accessToken));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post(
      'https://be.bhyve-app.com:3020/user/signup',
      {
        username,
        password,
      }
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fillUserInfo = (firstName, lastName) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_COMPLETE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userToken },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    };

    const { data } = await axios.post(
      'https://be.bhyve-app.com:3020/user/basic/profile',
      {
        firstName,
        lastName,
      },
      config
    );

    dispatch({
      type: USER_COMPLETE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_COMPLETE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_PROFILE_REQUEST,
    });

    const {
      userLogin: { userToken },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    const { data } = await axios.get(
      'https://be.bhyve-app.com:3020/user/profile',
      config
    );

    dispatch({
      type: GET_USER_PROFILE_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userFullProfile', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('userToken');
  localStorage.removeItem('userFullProfile');
  dispatch({ type: USER_LOGOUT });
};
