export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};

export const login = (token) => {
  localStorage.setItem("access_token", token);
};

export const logout = () => {
  localStorage.removeItem("access_token");
};
