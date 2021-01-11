import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
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
