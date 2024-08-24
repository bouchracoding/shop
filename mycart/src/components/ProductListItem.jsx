import React,{useContext} from 'react'
import { ShoppingContext } from './context/ShoppingContext';

function ProductListItem({product}) {
    const {addToCart}=useContext(ShoppingContext);
  return (
 

 <div className="col-md-4 mb-4">
   <div className="card" style={{width:'18rem'}}>
      <img src={product.image}className ="cart-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title text-success" >$ { product.price} </h5>
         <p className="card-text"> Utensils are essential kitchen tools for cooking, eating, and food preparation, including spoons, forks, knives.</p>
        <button
        onClick={()=>addToCart(product)}
        className="btn btn-primary"><i className="bi bi-cart-check"></i> add to cart
        </button>
      </div>
    </div>
  </div>
 

  )
}

export default ProductListItem