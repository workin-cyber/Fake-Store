import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './../Components/Loader'

export default function Categories() {

    const [list, setList] = useState()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => setList(res.data))
    }, [])

    return list ?
        <ul className='categoriesList'>
            {list.map(category => <Link key={category} to={`/products/${category}`}>
                <li>{category}</li>
            </Link>)}
        </ul>
        : <Loader />
}