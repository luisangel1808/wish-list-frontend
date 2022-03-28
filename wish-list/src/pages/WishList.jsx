import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Table.css';
import wishService from "../services/wish.service";
import {toIso} from "../util/convertDate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishList = () => {

  const [wishesHistory, setWishesHistory] = useState([])


  useEffect(() => {
      async function fetch(){
        setWishesHistory(await wishService.getWishes());
        verifyStock()
      }
      fetch();
  }, [])

  const notify = () => toast("Eliminado!");

  const deleteWish = async wishId =>{
    try {
     await wishService.deleteWish(wishId);
     setWishesHistory(await wishService.getWishes());
     notify();
    } catch (error) {
      alert('Ocurrió un error al eliminar el deseo');
      console.log(error)
    }
    
  }
  const verifyStock = () =>{
    wishesHistory.map(wish=>{
      if(wish.state==="V" && wish.product.stock===0){
        toast(`No hay stock del producto ${wish.product.name}`);
      }
    })
  }


  return (
    wishesHistory.length>0?
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Fecha de creación</th>
          <th>Fecha de eliminación</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {wishesHistory.map(wish=>{
          return(
            <tr>
              <td><Link to={`${wish.product.id}`}>{wish.product.name}</Link></td>
              <td>{toIso(wish.registrationDate)}</td>
              <td>{wish.removalDate?toIso(wish.removalDate): "---"}</td>
              <td>{wish.state==="V"?"Vigente":"Eliminado"}</td>
              <td><button hidden={wish.state==="D"} onClick={()=>deleteWish(wish.id)}>Eliminar</button></td>
            </tr>
          )
        })}
      </tbody>
      <ToastContainer />
    </table>
   :
   <h2>No existen deseos actualmente</h2> 
  )
}

export default WishList