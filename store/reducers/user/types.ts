export interface User {
    loggedIn: boolean,
    [key: string]: unknown
}

export const initialState: User = {
    loggedIn: false
}