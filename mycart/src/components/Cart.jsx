import React,{useContext} from 'react'
import { ShoppingContext } from './context/ShoppingContext'
import bImage from './b.jpg'; // Import the image file

function Cart() {
    const{cartItems ,incrementQ,decrementQ,removeFromCart}=useContext(ShoppingContext);
    const style = {
        backgroundImage: `url(${bImage})`,
        backgroundSize: 'cover',      // Ensures the image covers the whole container
        backgroundPosition: 'center', // Centers the image in the container
          height:'100vh',            // Set the height for the container
        width: '100%'                 // Set the width to cover the full container width
      };
  return (
    <div style={style}>
    <div className='row my-4'>
        <div className='col-md-12'>
            <div className='card'>
                <div className='cart-body'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                              cartItems && cartItems.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td >
                                          <img src={item.image} 
                                          className='fluid rounded' 
                                             width={60} 
                                             height={60} 
                                             alt={item.name}/>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                         <i 
                                         onClick={()=>incrementQ(item)}
                                         style={{cursor:'pointer'}}
                                         className="bi bi-caret-up"></i>
                                         <span className="mx-2">
                                            {item.quantity}
                                         </span>
                                            <i 
                                            onClick={()=>decrementQ(item)}
                                            style={{cursor:'pointer'}}
                                            className="bi bi-caret-down"></i> 
                                        </td>
                                        <td>  $ {item.price}</td>
                                        <td> $ {item.price *item.quantity}</td>
                                        <td>  
                                            <i
                                             onClick={()=>removeFromCart(item)}
                                               style={{cursor:'pointer'}}
                                               className="bi bi-trash3 text-danger"> </i>

                                         </td>
                                
                                    </tr>
                                ))
                            }
                            <tr>
                                <th colSpan={3} className= " text-center">
                                    Total
                                </th>
                                <td colSpan={3} className= " text-center">
                                    <span className='badge bg-danger rouned-pill'>
                                        ${
                                            cartItems.reduce((acc,item)=> acc+=item.price * item.quantity,0)
                                        }
                                    </span>
                                </td>
                                   
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    </div>
    </div>
  )
}

export default Cart