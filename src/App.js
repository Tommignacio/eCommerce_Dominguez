import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import TitleContainer from './components/TitleContainer/TitleContainer';


function App() {
  return (
    <>
    <header >
     <NavBar/>
     <TitleContainer title="Welcome to GentleMan"/>
    </header>

    </>
  );
}

export default App;
