import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import App from "./helpers/init";

import auth from "./methods/auth";

const firebaseAuth = getAuth(App);
const firebaseStore = getFirestore(App);

const AuthService = new auth(firebaseAuth);

export { AuthService };
