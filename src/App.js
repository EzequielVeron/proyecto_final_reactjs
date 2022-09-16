import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget  from './components/CartWidget';
import {BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={< ItemListContainer/>} />
          <Route path="/producto/:productoid" element={< ItemListContainer/>} />
          <Route path="/cart" element={< CartWidget/>} />
          <Route path="/detalle" element={< ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
