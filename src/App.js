import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <header >
     <NavBar/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/> 
        <Route path="/category/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:idCategory" element={<ItemListContainer/>}/>
        <Route exact path="/item/:idDetail" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
