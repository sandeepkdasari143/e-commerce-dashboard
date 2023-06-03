import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    collections: [],
}

const adminStoreSlice = createSlice({
    name: "adminStore",
    initialState,
    reducers: {
        SET_COLLECTIONS: (state, action) => {
            const sortedCollections = [...action.payload].sort((a, b) =>
                b.updatedAt.toLocaleString().localeCompare(a.updatedAt.toLocaleString())
            );
            state.collections = sortedCollections;
        },
        ADD_COLLECTION: (state, action) => {
            const sortedCollections = [...state.collections, action.payload].sort((a, b) =>
                b.updatedAt.toLocaleString().localeCompare(a.updatedAt.toLocaleString())
            );
            state.collections = sortedCollections;
        }
    }
})


export const { SET_COLLECTIONS, ADD_COLLECTION} = adminStoreSlice.actions;

export default adminStoreSlice.reducer;