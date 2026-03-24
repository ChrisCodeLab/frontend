import axios from "axios";

const API_BASE = "https://contact-service-v4ev.onrender.com";

export const sendContact = async (data) => {
  return axios.post(`${API_BASE}/api/contact/submit`, data);
};