import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddToCart from '../AddToCart'
import Loader from '../Components/Loader'

export default function Product() {
    const { productId } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => setProduct(res.data))
    }, [])

    return product ? <div className='single'>
        <img src={product.image} />
        <h1>{product.title} </h1>
        <AddToCart product={product} />
        <h2>{product.price}$</h2>
        <p>{product.description}</p>
    </div>
        : <Loader />
}