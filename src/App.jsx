import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contato from '../pages/contato';  
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/contact' element={<Contato />} /> 
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
