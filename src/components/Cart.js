import React,{useContext} from 'react'
import './Cart.css'
import {CartContext} from '../shared/context/cart-context'

const Cart=()=>{
    const [cartItems,setCartItems] = useContext(CartContext)
    const totalPrice = cartItems.reduce((prevValue,currValue)=>{
        return prevValue + currValue.price
    },0)
    return(
        <div className='cart'>
            <p>Items in cart :{cartItems.length}</p>
            <p>Total Price:{totalPrice}</p>
        </div>
    )
}
export default Cart