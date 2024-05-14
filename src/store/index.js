import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter';
import themeSlice from './slices/theme';

export default configureStore({
    reducer: {
        counter: counterSlice,
        theme: themeSlice
    }
})


// Install Packages
// Store Folder => index.js ( store.js ) => configureStore => reducer
// Slices Folder => (counter , language , theme , loader, cart ...)
// Slice ( counter ) => createSlice => name , initialState, reducers 
// reducers => { counterFunction : (state, action) => UPDATE STATE NEW VALUE }
// Export actions , reducer => from slice
// Store file => Add reducer to configureStore
// Index.js => Add <Provider store={store}>