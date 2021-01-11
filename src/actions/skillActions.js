import {
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
