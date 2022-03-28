import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import '../styles/Product.css';
import productService from "../services/product.service";
import wishService from "../services/wish.service";
const Home = () => {

    const [products, setProducts] = useState([]);
    const [activeWishes, setActiveWishes] = useState([]);

    useEffect(() => {
        async function fetch(){
            setProducts(await productService.getProducts());
            setActiveWishes(await wishService.getActiveWishes())
            
        }
        fetch();
    }, [])

    products.map(product=>{
        activeWishes.map(wish=>{
            if(product.id===wish.product.id){
                product.wished=true;
            }
        })
    })
    console.log(products)

    return(
        products.length>0?
        <section className="products_section">
            <h2>Productos Carvajal</h2>
            <div className='products'>
            {products.map(product=>{
                return <Product product={product} key={product.id}/>
            })}
            </div>
        </section>
        :<h2>No existen productos disponibles</h2>
    )
}

export default Home