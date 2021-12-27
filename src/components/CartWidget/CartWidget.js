import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const CartWidget = () => {
	const test = useContext(CartContext);
	return (
		<div className="cartStyle">
			<Link className="myLink" to="/cart">
				{" "}
				{test.cartList.length > 0 && (
					<div className="btn-count">{test.countCartlist()}</div>
				)}
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					{" "}
					<AiOutlineShoppingCart style={{ height: "1.5em", width: "1.5em" }} />
				</button>
			</Link>
		</div>
	);
};
export default CartWidget;
