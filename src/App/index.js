import { Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Cart from '../Cart'
import Categories from '../Pages/Categories'
import Product from '../Pages/Product'
import products from '../Pages/Products'
import './app.css'

function App() {
    return <div className='App'>
        <Header />
        <Cart>
            <Switch>
                <Route path='/' component={Categories} exact />
                <Route path='/products/:categoryName' component={products} />
                <Route path='/product/:productId' component={Product} />
            </Switch>
        </Cart>
    </div>
}

export default App
