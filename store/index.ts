import { RootState } from "./store"
import { useSelector, useDispatch } from "react-redux";


/// lets create a helper for accessing store and state without
/// the hustle of import always, hey am lazy!!!! 
const useStore = () => {
    const dispatch = useDispatch();
    const store = useSelector((state: RootState) => state);
    return { dispatch, store };
}

export { useStore }