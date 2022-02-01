import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './auth/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
