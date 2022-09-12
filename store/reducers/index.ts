import { userReducer } from "./user";
import { filterReducer } from "./filters";
import { authReducer } from "./auth";

/// reducers poll
export const reducers = {
  user: userReducer,
  filter: filterReducer,
  auth: authReducer,
};
