import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import TitleContainer from './components/TitleContainer/TitleContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <header >
     <NavBar/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/> 
        <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
     
        <Route path="/item/:idDetail" element={<ItemDetailContainer/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
