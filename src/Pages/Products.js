import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AddToCart from '../AddToCart'
import Loader from '../Components/Loader'

export default function Products() {
    const { categoryName } = useParams()
    const [list, setList] = useState()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => setList(res.data))
    }, [])

    return list ?
        <>
            <h1>{categoryName}</h1>
            <div className='productsList'>{
                list.map(product => <Link
                    key={product.id}
                    className='productItem'
                    to={`/product/${product.id}`}
                >
                    <div className='productImage' style={{ backgroundImage: `url(${product.image})` }} />
                    <h2>{product.price}$</h2>
                    <AddToCart product={product} />
                    <label>{product.title}</label>
                </Link>)
            }</div>
        </>
        : <Loader />
}