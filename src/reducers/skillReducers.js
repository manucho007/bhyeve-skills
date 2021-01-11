import {
  SKILL_LIST_FAIL,
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
} from '../constants/skillConstants';

export const skillListReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILL_LIST_REQUEST:
      return { loading: true };
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
