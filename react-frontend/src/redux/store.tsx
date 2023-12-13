import { configureStore } from "@reduxjs/toolkit";
import { postsAPI } from "./postAPIservice";
import authSlicer  from "./postSlicer"
// import authMiddleware from "./authMiddleware";

export type RootState = {
    auth: ReturnType<typeof authSlicer>;
    [postsAPI.reducerPath]: ReturnType<typeof postsAPI.reducer>;
  };


const store = configureStore({
    reducer:{
        auth: authSlicer,
        [postsAPI.reducerPath]: postsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsAPI.middleware)
    // .prepend(authMiddleware)
})

export type AppDispatch = typeof store.dispatch;
export default store;