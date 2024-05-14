import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    current_theme : 'light',
    available_themes: ['light' , 'dark' , 'auto']
}

const themeSlice = createSlice({
    name : "theme",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentTheme : (state, action) => {
          state.current_theme = action.payload
        }
    }
})

export const { setCurrentTheme } = themeSlice.actions;

export default themeSlice.reducer;