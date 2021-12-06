import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDpxOKRexWOn2eYog2NPxIM76JlixnVVcs",
	authDomain: "ecommercecoder-c0418.firebaseapp.com",
	projectId: "ecommercecoder-c0418",
	storageBucket: "ecommercecoder-c0418.appspot.com",
	messagingSenderId: "531921615021",
	appId: "1:531921615021:web:e5f0480258dd52a9c0ae24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
