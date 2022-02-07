const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.refresh_token;
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.access_token;
};

const updateLocalAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem('user'));
  user.access_token = token;
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const setUser = (user) => {
  console.log(JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));
};

const setAccessToken = (access_token) => {
  localStorage.setItem('access_token', JSON.stringify(access_token));
};

const removeUser = () => {
  localStorage.removeItem('user');
};

export const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
  setAccessToken,
};
