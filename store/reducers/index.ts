import { userReducer } from "./user"
import { filterReducer } from "./filters"

/// reducers poll
export const reducers = {
    "user": userReducer,
    "filter": filterReducer
}