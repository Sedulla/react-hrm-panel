import { axiosInstance } from './axios';

const getUserBoard = () => {
  return axiosInstance.get('/test/user');
};

const getHrBoard = () => {
  return axiosInstance.get('/test/hr');
};

const getDepartmentHeadBoard = () => {
  return axiosInstance.get('/test/admin');
};

export const UserService = {
  getUserBoard,
  getHrBoard,
  getDepartmentHeadBoard,
};
