import { setDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../helpers/init";

// add to data
export const post = (path: string, data = {} as object) => {
  return setDoc(doc(firebaseStore, path), data);
};
