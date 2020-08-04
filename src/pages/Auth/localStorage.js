export const AUTH = false;

export const getIsAuth = () => sessionStorage.getItem(AUTH);

export const postIsAuth = token => {
  sessionStorage.setItem(AUTH, token);
};

export const logout = () => {
  sessionStorage.removeItem(AUTH);
};