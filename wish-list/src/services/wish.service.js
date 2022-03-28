import axios from "axios";
const API_URL = "http://localhost:8080/api/wish-list/";

const addWish = async (registrationDate, removalDate, productId) => {
    
    return await axios.post(
        `${API_URL}insert`,
        {
          registrationDate,
          removalDate,
          state:'V',
          product:{
              id:productId
          }
        },
        { headers: {'Authorization': `Bearer ${localStorage.token}` 
        }

    });
};

const getWishes = async () =>{
    const res = await axios.get(
        API_URL,
        { headers: {
          Authorization: `Bearer ${localStorage.token}` 
        } }
      );
      return res.data;
}

const getActiveWishes = async () =>{
  const res = await axios.get(
    "http://localhost:8080/api/wish-list-active/",
      { headers: {
        Authorization: `Bearer ${localStorage.token}` 
      } }
    );
    return res.data;
}

const deleteWish = async id =>{
  const res = await axios.delete(
      `http://localhost:8080/api/delete-wish/${id}`,
      { headers: {
        Authorization: `Bearer ${localStorage.token}` 
      } }
    );
    return res.data;
}

export default {
    addWish,
    getWishes,
    getActiveWishes,
    deleteWish,
};
