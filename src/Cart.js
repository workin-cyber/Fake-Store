import { createContext, useState } from 'react'
import AddToCart from './AddToCart'

export const CartContext = createContext()

export default function Cart({ children }) {
    const [cart, setCart] = useState([])

    function addToCart(product, delta) {
        const index = cart.findIndex(p => p.id == product.id)
        if (index == -1) {
            product.amount = 1
            setCart([...cart, product])
        }
        else {
            const newAmount = cart[index].amount + delta
            if (newAmount <= 0) {
                product.amount = 0
                setCart(cart.filter(p => p.id != product.id))
            }
            else {
                cart[index].amount = newAmount
                setCart([...cart]) // new array (https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-react-js)
            }
        }
    }

    const sum = cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0)
    const pNum = cart.reduce((acc, curr) => acc + curr.amount, 0)

    return <div className='cartWrapper'>
        <CartContext.Provider value={{ cart, addToCart }}>
            <div className='cart'>
                <h2>Cart</h2>
                <div>
                    <div className='scroller'>
                        {cart.length ? cart.map(cartItem => <div key={cartItem.id} className='cartItem'>
                            <div className='flex'>
                                <div className='productImage' style={{ backgroundImage: `url(${cartItem.image})` }} />
                                <h4 className='name'>{cartItem.title}</h4>
                            </div>
                            <h5>{cartItem.price}$</h5>
                            <AddToCart product={cartItem} />
                        </div>) :
                            <h4 className='please'>Please Add Products :(</h4>
                        }
                    </div>
                    <h3>sum: {sum.toFixed(2)}$</h3>
                    <h3>products num: {pNum.toFixed(0)}</h3>
                </div>
            </div>
            {children}
        </CartContext.Provider>
    </div>
}