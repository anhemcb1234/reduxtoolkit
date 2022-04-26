import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';

export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
