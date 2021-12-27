import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import {
	DivCart,
	ImgCart,
	DivTitle,
	Text,
	DivText,
	DelBtn,
	DivImg,
	DivTotal,
	Total,
	DivContainer,
	DivDelBtn,
	FinalDiv,
	FinalPrice,
	TitFinalPrice,
	FinalWrapp,
	FinalDeliv,
	FinalDelFree,
	DeliDiv,
	BuyBtn,
	DivBuyBtn,
	DivEmpty,
	Empty,
	BtnContinue,
	DivBag,
	WrappCart,
	DelAll,
	DivDelete,
} from "./styledCart";

import {
	collection,
	doc,
	setDoc,
	updateDoc,
	increment,
} from "firebase/firestore";
import db from "../../utils/FirebaseConfig";
import { NavBarList } from "../NavBar/NavBarList";
import { Link } from "react-router-dom";

const Cart = () => {
	const test = useContext(CartContext);

	const createOrder = () => {
		let order = {
			buyer: {
				name: "Juan Carlos",
				email: "juanca@gmail.com",
				phone: "58392850",
			},
			items: test.cartList.map((item) => ({
				id: item.idItem,
				title: item.titlItem,
				price: item.priceItem,
				qty: item.qtyItem,
			})),
			total: test.totalFinal(),
		};
		test.cartList.forEach(async (item) => {
			const itemRef = doc(db, "products", item.idItem);
			await updateDoc(itemRef, {
				stock: increment(-item.qtyItem),
			});
		});
		const createOrderInFirestore = async () => {
			const newOrderRef = doc(collection(db, "orders"));
			await setDoc(newOrderRef, order);
			return newOrderRef;
		};
		createOrderInFirestore()
			.then((result) =>
				alert("Thanks for you purchase! Your product order is: " + result.id)
			)
			.catch((err) => console.log(err));

		test.clear();
	};

	return (
		<>
			{/* si el carrito no esta vacio */}
			<NavBarList />

			{test.cartList.length > 0 ? (
				<WrappCart>
					<h1>Shopping Bag</h1>
					<DivDelete>
						<DelAll onClick={test.clear}>
							{" "}
							<FaTimes />
						</DelAll>
					</DivDelete>

					{
						// recorrre los objetos dentro de la lista del carrito
						test.cartList.map((el) => (
							<DivCart key={el.idItem}>
								<DivImg>
									<ImgCart src={el.imgItem} />
								</DivImg>

								<DivContainer>
									<DivTitle>
										<h2>{el.titlItem} </h2>
									</DivTitle>
									<DivText>
										<Text> Quantity: {el.qtyItem}</Text>
										<Text>Price: $ {el.priceItem}</Text>
										<Text>
											Size:{" "}
											<spam style={{ textTransform: "uppercase" }}>
												{el.sizeItem}{" "}
											</spam>
										</Text>
									</DivText>
								</DivContainer>
								<DivTotal>
									<Total>
										$ {test.calcTotalPerItem(el.idItem, el.sizeItem)}
									</Total>
									{/* evento que tiene como manejador a la funcion del contexto cart y como parametros el id del producto agregado al carrito */}
									<DivDelBtn>
										<DelBtn onClick={() => test.removeItem(el.idItem)}>
											<FaTrashAlt />
										</DelBtn>
									</DivDelBtn>
								</DivTotal>
							</DivCart>
						))
					}
					<FinalWrapp>
						<FinalDiv>
							<TitFinalPrice> Total</TitFinalPrice>
							<FinalPrice> {test.totalFinal()}</FinalPrice>
						</FinalDiv>
						<DeliDiv>
							<FinalDeliv>Delivery</FinalDeliv>
							<FinalDelFree> Free!</FinalDelFree>
						</DeliDiv>
						<DivBuyBtn>
							<BuyBtn onClick={createOrder}>Buy</BuyBtn>
						</DivBuyBtn>
					</FinalWrapp>
				</WrappCart>
			) : (
				<DivEmpty>
					<DivBag>
						<Empty>Your Shopping Bag is empty!</Empty>
						<Link
							style={{
								display: "flex",
								justifyContent: "center",
								color: "black",
								textDecoration: "none",
							}}
							to="/"
						>
							<BtnContinue>Continue Shopping</BtnContinue>
						</Link>
					</DivBag>
				</DivEmpty>
			)}
		</>
	);
};
export default Cart;
