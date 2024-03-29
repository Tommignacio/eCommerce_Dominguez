import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Context/CartContext";
import Home from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ErrorComponent } from "./components/ErrorComponent/ErrorComponent";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/" element={<ItemListContainer />} /> */}
					<Route path="/" element={<Home />} />
					{/* <Route path="/category/" element={<ItemListContainer/>}/> */}
					<Route
						exact
						path="/:idName/:idCategory"
						element={<ItemListContainer />}
					/>
					<Route
						exact
						path="/item/:idDetail"
						element={<ItemDetailContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/*" element={<ErrorComponent />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
