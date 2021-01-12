import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userProfileReducer,
  userFillInfoReducer,
} from './reducers/userReducers';
import { skillListReducer } from './reducers/skillReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userFillInfo: userFillInfoReducer,
  userProfile: userProfileReducer,
  skillList: skillListReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const userTokenFromStorage = localStorage.getItem('userToken')
  ? JSON.parse(localStorage.getItem('userToken'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage, userToken: userTokenFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
