import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllOrder = async () => {
  try {
    let res = await axios.get(`${apiURL}/order/get-all-orders`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (oId, status) => {
  let data = { oId: oId, status: status };
  console.log(data);
  try {
    let res = await axios.post(`${apiURL}/order/update-order`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (oId) => {
  let data = { oId: oId };
  try {
    let res = await axios.post(`${apiURL}/order/delete-order`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
