import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/auth/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
