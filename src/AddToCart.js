import { useContext } from "react"
import { CartContext } from "./Cart"


export default function AddToCart({ product }) {

    const { cart, addToCart } = useContext(CartContext)

    const cartItem = cart.find(p => p.id == product.id) || product
    const { amount } = cartItem

    function onBtnClick(e, delta) {
        e.preventDefault()
        addToCart(product, delta)
    }

    return <div className='addToCart'>{amount ?
        <div className='plusMinus'>
            <button onClick={e => onBtnClick(e, 1)}>+</button>
            <span>{amount}</span>
            <button onClick={e => onBtnClick(e, -1)}>-</button>
        </div> :
        <button onClick={e => onBtnClick(e, 1)} >Add to Cart</button>}
    </div>
}