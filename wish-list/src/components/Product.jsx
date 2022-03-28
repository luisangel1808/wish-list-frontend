import React, {useState} from 'react';
import '../styles/Product.css';
import wishService from "../services/wish.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = (props) => {

    const product = props.product;

    const [imag, setImage] = useState([]);
    const [update, setUpdate] = useState(false);

    const changeImage = (i, pos) =>{
        const newImag = imag;
        newImag[i]=pos
        setImage([...newImag]);
    }

    let index=0;

    const notify = () => toast("Deseo añadido!");

    const addWish = product =>{
      if(product.wished!==true){
        wishService.addWish(new Date(), null, product.id);
        notify();
        setUpdate(true)
      }
        
    }

  return (
    <div className='product' onLoad={()=>setUpdate(product.wished)}>
       <h2>{product.name}</h2>
       <img src={imag[index]?product.images[imag[index]].url:product.images[0]?.url} alt={product.name} />
                    <div className="buttons">
                      {product.images.map((_,i)=>{
                        return <button key={i+"s"} onClick={()=>changeImage(index,i)} className="select"></button>
                      })}
                    </div>
       <p> <strong> ${product.price} </strong> </p>
       <p>Disponibles: <span>{product.stock}</span></p>
       <button hidden={update} onClick={()=>addWish(product)}>Añadir a mis deseos</button>
       <ToastContainer />
    </div>
  )
}

export default Product