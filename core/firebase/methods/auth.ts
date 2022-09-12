import { signInWithEmailAndPassword } from "firebase/auth";

class FirebaseAuth {
  private firebaseApp: any;
  constructor(firebaseAuth: any) {
    this.firebaseApp = firebaseAuth;
  }

  getAuth = () => {
    return this.firebaseApp;
  };

  login = (email: string, password: string) => {
    return signInWithEmailAndPassword(this.firebaseApp, email, password);
  };

  logout = () => {
    return this.getAuth().signOut();
  };
}

export default FirebaseAuth;
