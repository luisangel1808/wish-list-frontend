import React, { useRef, useState } from 'react';
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits,  MdOutlinePriceCheck } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import productService from "../services/product.service";

const AddProduct = () => {

    
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState();

  const form = useRef(null);

  const notify = () => toast("Producto añadido!");

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const res =  await productService.addProduct(name, price, stock); 
      await productService.insertImage(name,imageUrl,res.data.id);
      notify();
    }
    catch(e){
      alert('Ocurrió un error al crear el producto')
    }

  }

  return (
    <main>
        <form onSubmit={handleSubmit} ref={form}>
        <h2>Agregar producto</h2>
        <div className="field">
          <MdOutlineProductionQuantityLimits size="1.5em" />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <MdOutlinePriceCheck size="1.5em" />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="field">
          <AiOutlineFieldNumber size="1.5em" />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="field">
          <BsImages size="1.5em" />
          <input
            type="url"
            name="image"
            placeholder="Imagen"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button>Agregar producto</button>
      </form>
      <ToastContainer />
    </main>
  )
}

export default AddProduct