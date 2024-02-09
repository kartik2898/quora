import http from "../http-interceptor";

const login = (email, password) => {
  return http.post(`https://academics.newtonschool.co/api/v1/user/login`, { email: email, password: password, "appType": "quora" });
};
const signUp = (name,email, password) => {
  return http.post(`https://academics.newtonschool.co/api/v1/user/signup`, {name: name, email: email, password: password, "appType": "quora" });
};
const AuthService = {
  login,
  signUp
};

export default AuthService
