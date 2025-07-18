import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const getTokenHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getAllProduct = async () => {
  try {
    let res = await axios.get(`${apiURL}/product/all-product`, {
      headers: getTokenHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPendingProducts = async () => {
  try {
    let res = await axios.get(`${apiURL}/product/pending`, {
      headers: getTokenHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPorductImage = async ({ pImage }) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  /* Most important part for uploading multiple image  */
};

export const createProduct = async ({
  pName,
  pDescription,
  pImage,
  pStatus,
  pCategory,
  pQuantity,
  pPrice,
  pOffer,
}) => {
  /* Most important part for uploading multiple image  */
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  /* Most important part for uploading multiple image  */
  formData.append("pName", pName);
  formData.append("pDescription", pDescription);
  formData.append("pStatus", pStatus);
  formData.append("pCategory", pCategory);
  formData.append("pQuantity", pQuantity);
  formData.append("pPrice", pPrice);
  formData.append("pOffer", pOffer);

  try {
    let res = await axios.post(`${apiURL}/product/add-product`, formData, {
      headers: getTokenHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (product) => {
  console.log(product);
  /* Most important part for updating multiple image  */
  let formData = new FormData();
  if (product.pEditImages) {
    for (const file of product.pEditImages) {
      formData.append("pEditImages", file);
    }
  }
  /* Most important part for updating multiple image  */
  formData.append("pId", product.pId);
  formData.append("pName", product.pName);
  formData.append("pDescription", product.pDescription);
  formData.append("pStatus", product.pStatus);
  formData.append("pCategory", product.pCategory._id);
  formData.append("pQuantity", product.pQuantity);
  formData.append("pPrice", product.pPrice);
  formData.append("pOffer", product.pOffer);
  formData.append("pImages", product.pImages);

  try {
    let res = await axios.post(`${apiURL}/product/edit-product`, formData, {
      headers: getTokenHeader(),
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (pId) => {
  try {
    let res = await axios.post(
      `${apiURL}/product/delete-product`,
      { pId },
      { headers: getTokenHeader() }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return { error: error.message || "Delete product failed" };
  }
};

export const productByCategory = async (catId) => {
  try {
    let res = await axios.post(
      `${apiURL}/product/product-by-category`,
      {
        catId,
      },
      { headers: getTokenHeader() }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByPrice = async (price) => {
  try {
    let res = await axios.post(
      `${apiURL}/product/product-by-price`,
      {
        price,
      },
      { headers: getTokenHeader() }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
