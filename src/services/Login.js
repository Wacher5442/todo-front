import { httpClient } from "src/utils/Api";

const LoginService = {
  // async CreateAccount(values) {
  //   return await httpClient.post("admin/create_account", values);
  // },

  async Login(values, token) {
    return await httpClient(token).post(`login`, values);
  },

  async SetPassword(values, token) {
    return await httpClient(token).post(`admin/change/password`, values);
  },
};

export default LoginService;
