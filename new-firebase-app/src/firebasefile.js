// import firebase from "firebase/app";
import firebase from "firebase/compat/app";

// import "firebase/auth";
// import "firebase/firebase-firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import configs from "./configs";

firebase.initializeApp(configs);

const auth = firebase.auth();

const db = firebase.firestore();

export { auth, db };
