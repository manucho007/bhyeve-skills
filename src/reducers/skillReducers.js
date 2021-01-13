import {
  ADD_SKILLS_FAIL,
  ADD_SKILLS_REQUEST,
  ADD_SKILLS_SUCCESS,
  SKILL_LIST_FAIL,
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
} from '../constants/skillConstants';

export const skillListReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILL_LIST_REQUEST:
      return { loading: true, ...state };
    case SKILL_LIST_SUCCESS:
      return {
        loading: false,
        skills: action.payload,
      };
    case SKILL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const skillAddReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case ADD_SKILLS_REQUEST:
      return { loading: true };
    case ADD_SKILLS_SUCCESS:
      return {
        success: true,
        loading: false,
        userInfo: action.payload,
      };
    case ADD_SKILLS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
