export interface Filters {
    country: string,
    [key: string]: unknown
}

export const initialState: Filters = {
    country: "nigeria"
}