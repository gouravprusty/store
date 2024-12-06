import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Categories from './Pages/Categories';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Sign from './Pages/Sign';
import Footer from './Components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kids_banner from './Assets/banner_kids.png';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop/>} />
                    <Route path='/men' element={<Categories banner={men_banner} category="men"/>} />
                    <Route path='/women' element={<Categories banner={women_banner} category="women"/>} />
                    <Route path='/kids' element={<Categories banner={kids_banner} category="kid"/>} />
                    <Route path='/product' element={<Product/>}>
                        <Route path=':productId' element={<Product/>} />
                    </Route>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Sign/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
