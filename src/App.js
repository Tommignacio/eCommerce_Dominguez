import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import TitleContainer from './components/TitleContainer/TitleContainer';
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <>
    <header >
     <NavBar/>
     <TitleContainer title="Welcome to GentleMan"/>
    </header>
    <ItemCount stock={5} initial={1} />
    </>
  );
}

export default App;
