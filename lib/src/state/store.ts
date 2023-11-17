import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AnyAction, Reducer, ReducersMapObject } from "redux";

// Define the configureReducer function
const configureReducers = (): {
    // Add your reducer logic here
} => {
    // Add your reducer logic here
    return {
        // Add your reducer logic here
    };
}


export const reduxStore = configureStore({
    reducer: configureReducers(),
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch;