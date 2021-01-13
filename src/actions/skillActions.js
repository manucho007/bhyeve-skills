import {
  ADD_SKILLS_FAIL,
  ADD_SKILLS_REQUEST,
  ADD_SKILLS_SUCCESS,
  SKILL_LIST_FAIL,
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
} from '../constants/skillConstants';
import axios from 'axios';
export const listSkills = () => async (dispatch) => {
  try {
    dispatch({
      type: SKILL_LIST_REQUEST,
    });

    const { data } = await axios.get('https://be.bhyve-app.com:3020/skills');

    dispatch({
      type: SKILL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addSkills = (skills) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_SKILLS_REQUEST,
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
    console.log(skills);

    const { data } = await axios.post(
      'https://be.bhyve-app.com:3020/user/skills',
      { skills },
      config
    );

    dispatch({
      type: ADD_SKILLS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_SKILLS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
