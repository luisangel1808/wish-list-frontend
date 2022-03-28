import axios from "axios";
const API_URL = "http://localhost:8080/api/product/";

const addProduct = async (name, price, stock) => {
    
    return await axios.post(
        `${API_URL}insert`,
        {
          name,
          price,
          stock,
          state:'V',
        },
        { headers: {'Authorization': `Bearer ${localStorage.token}` 
        }

    });
};

const getProducts = async () =>{
    const res = await axios.get(
        `${API_URL}`,
        { headers: {
          Authorization: `Bearer ${localStorage.token}` 
        } }
      );
      return res.data;
}

const insertImage = async (name, url, productId) => {
    
  return await axios.post(
      "http://localhost:8080/api/image/insert",
      {
        name,
        url,
        product:{
          id:productId
        }
      },
      { headers: {'Authorization': `Bearer ${localStorage.token}` 
      }

  });
};

export default {
    addProduct,
    getProducts,
    insertImage,
};
