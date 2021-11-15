import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import TitleContainer from './components/TitleContainer/TitleContainer';
import ItemCount from './components/ItemListContainer/ItemCount'
import ItemList from './components/ItemListContainer/ItemList';


function App() {
  return (
    <>
    <header >
     <NavBar/>
     <TitleContainer title="Welcome to GentleMan"/>
    </header>
    <main>
    <ItemCount stock={5} initial={1} />
    <ItemList/>
   
    </main>
  
    </>
  );
}

export default App;
