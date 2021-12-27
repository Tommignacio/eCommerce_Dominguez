import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FirestoreFetchOne } from "../../utils/FirestoreFetch";

const ItemDetailContainer = () => {
	const [detailProd, setDetailProd] = useState({});
	const { idDetail } = useParams();

	useEffect(() => {
		FirestoreFetchOne(idDetail)
			.then((result) => setDetailProd(result))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<ItemDetail elem={detailProd} />
		</>
	);
};
export default ItemDetailContainer;
