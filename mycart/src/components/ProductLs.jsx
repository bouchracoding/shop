import React,{useContext} from 'react'
import ProductListItem from './ProductListItem';
import { ShoppingContext } from './context/ShoppingContext';

function ProductLs() {
    const {products}=useContext(ShoppingContext);
  return (
    <div className='row my-4'>
       
        
        {
        products && products.map(product => <ProductListItem key={product.id}
                        product={product} />)
                        }
       
       
       

    </div>
  )
}

export default ProductLs;

{/*function ProductList({products,addToCart}) {// products est passé comme prop
    return (
      <div className='container mt-4'>
      <div className='row'>
        {products.map(product => 
            <ProductListItem key={product.id} product={product} addToCart={addToCart} />
       
        )}
      </div>
    </div>
    )
  } */}  // pass by props
    


      {/*<div className='col-md-4'>
      <div class="card" style={{width: "18rem"}}>
      <img src={product.image} class="card-img-top" alt="..."/>
       <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description}</p>
        <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i>add to cart</a>
     </div>
   </div>
  </div>*/}