import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import TitleContainer from './components/TitleContainer/TitleContainer';
import ItemList from './components/ItemListContainer/ItemList';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';

function App() {
  return (
    <>
    <header >
     <NavBar/>
     <TitleContainer title="Welcome to GentleMan"/>
    </header>
    <main>
   
    <ItemList/>
    <ItemDetail/>
    </main>
  
    </>
  );
}

export default App;
