import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { Link } from "react-router-dom";
const CartWidget = () => {
	return (
		<>
			<Link to="/cart">
				{" "}
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					{" "}
					<AiOutlineShoppingCart />
				</button>
			</Link>
		</>
	);
};
export default CartWidget;
