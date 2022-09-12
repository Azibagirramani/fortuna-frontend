import { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";

/// lets create a helper for accessing store and state without
const useStore = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);
  return { dispatch, store };
};

export { useStore };
