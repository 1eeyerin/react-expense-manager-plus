export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getTokenFromLocalStorage = () => localStorage.getItem('token');
export const setTokenToLocalStorage = (token) =>
  localStorage.setItem('token', token);
