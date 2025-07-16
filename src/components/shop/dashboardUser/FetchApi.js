import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getUserById = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/user/signle-user`, { uId }, { headers: getAuthHeaders() });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePersonalInformationFetch = async (userData) => {
  try {
    let res = await axios.post(`${apiURL}/user/edit-user`, userData, { headers: getAuthHeaders() });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUser = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/order/order-by-user`, { uId }, { headers: getAuthHeaders() });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/user/change-password`, formData, { headers: getAuthHeaders() });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
