import * as firebase from "firebase";
import firebaseCfg from "./firebase.cfg"

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = firebaseCfg
export default firebase.initializeApp(firebaseConfig);