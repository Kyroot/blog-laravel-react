// import { AnyAction, MiddlewareAPI } from 'redux';
// import { AppDispatch } from '../types';
// import { RootState } from './store';
// import { refreshToken } from "./authAction";


// // Define a specific action type for the refreshToken action.
// const REFRESH_TOKEN_ACTION_TYPE = 'auth/refreshToken';
// let z = 0
// const authMiddleware = (store: MiddlewareAPI<AppDispatch, RootState>) => (next: AppDispatch) => (action: AnyAction) => {
//     const result = next(action);


//         const state = store.getState();
//         const isLoggedIn = state.auth.isAuthenticated
//         const exp = state.auth.expiration;
//         const currentTime = new Date(Date.now());
//         const expDate = new Date(exp * 1000);
//         const remainingTime = expDate.getTime() - currentTime.getTime(); 
//         console.log(remainingTime)
        
//         if (remainingTime < 10000 && remainingTime > 0 && z < 1 && exp > 0) {
//             console.log('test1')
//             z++
//             store.dispatch(refreshToken());
//         }
//     // Continue to the next middleware or reducer
//     return result;
// };

// export default authMiddleware;
