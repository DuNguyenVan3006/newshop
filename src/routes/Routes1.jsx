import {Routes, Route} from 'react-router-dom'

import Cart from '../pages/cart/Cart'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'
import Catalog from '../pages/catalog/Catalog'


const Routes1 = () => {

    return(
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/github_Blackbrother/' element={<Home/>}/>
            <Route path='/github_Blackbrother/catalog' element={<Catalog/>}/>
            <Route path='/github_Blackbrother/catalog/:slug' element={<Product/>} />
            <Route path='/github_Blackbrother/cart' element={<Cart/>}/>
        </Routes>
    )
}

export default Routes1