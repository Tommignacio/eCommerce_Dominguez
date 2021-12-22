import {
	query,
	orderBy,
	where,
	collection,
	getDocs,
} from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./FirebaseConfig";

const FirestoreFetch = async (idName, idCategory) => {
	let q;
	if (idName) {
		q = query(
			collection(db, "Products"),
			where("category.name", "==", idName),
			where("category.id", "==", idCategory)
		);
	} else {
		q = query(collection(db, "Products"), orderBy("title"));
	}

	const querySnapshot = await getDocs(q);
	const dataFromFirestore = querySnapshot.docs.map((document) => ({
		id: document.id,
		...document.data(),
	}));
	return dataFromFirestore;
};

export default FirestoreFetch;

//recibe el Id del producto seleccionado para ver el detalle y lo muestra
export const FirestoreFetchOne = async (idDetail) => {
	const docRef = doc(db, "Products", idDetail);
	const docSnap = await getDoc(docRef);
	console.log(idDetail);
	if (docSnap.exists()) {
		return {
			id: idDetail,
			...docSnap.data(),
		};
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
};
