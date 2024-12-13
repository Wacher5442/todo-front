import axios from "axios";
import { urlAPI } from "./config";
export const httpClient = (token) =>
  axios.create({
    baseURL: urlAPI,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
