import http from "../http-interceptor";

const login = (email, password) => {
  return http.post(`/auth/login`, { email: email, password: password, "appType": "quora" });
};

const AuthService = {
  login
};

export default AuthService;
