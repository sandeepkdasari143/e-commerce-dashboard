import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    theme: 'dark',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        SET_THEME: (state, action) => {
            if(state.theme && action.payload && (typeof action.payload === 'string'))
                state.theme = action.payload.toLowerCase();
        },
        
        SWITCH_THEME: (state) => {
            if (state.theme)
                state.theme = state.theme.toLowerCase() === 'dark' ? 'light' : 'dark';
        }
    }
})

export const {SET_THEME, SWITCH_THEME} = themeSlice.actions;

export default themeSlice.reducer;