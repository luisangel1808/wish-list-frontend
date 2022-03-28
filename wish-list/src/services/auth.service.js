import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, email, password, roles, name) => {
  return axios.post(`${API_URL}signup`, {
    username,
    name,
    email,
    password,
    roles,
  });
};
const login = async (username, password) => {
  const response = await axios
    .post(`${API_URL}login`, {
      username,
      password,
    });
  if (response.data.token) {
    localStorage.setItem("user", response.data.username);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.authorities[0].authority);
  }
  return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  localStorage.removeItem("token");
  window.location.reload();
};
const getCurrentUser = () => {
  return localStorage.getItem("user");
};
const getRole = () => {
  return localStorage.getItem("role");
};
const getToken = () => {
  return localStorage.getItem("token");
};
export default {
  register,
  login,
  logout,
  getCurrentUser,
  getRole,
  getToken,
};
