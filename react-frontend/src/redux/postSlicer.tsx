import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { refreshToken } from "./authAction";

type InitialStateType = {
    token: string | null,
    isAuthenticated: boolean,
    expiration: number,
    role:string
}

const initialState = {
    token: null,
    isAuthenticated: false,
    expiration: 0,
    role:"user"
} as InitialStateType

const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;

            if (action.payload) {

                const decodedJWT: { exp: number } = jwtDecode(action.payload);

                if (decodedJWT.exp) {
                    state.expiration = decodedJWT.exp
                    const currentDate = new Date(Date.now())
                    const expDate = new Date(state.expiration * 1000)
                    if (currentDate < expDate) {
                        state.isAuthenticated = true
                    } else {
                        state.isAuthenticated = false
                        sessionStorage.removeItem('api_token')
                    }
                }
            }
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
        },
        setRole(state, action){
            state.role = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(refreshToken.fulfilled, (state, action) => {
            console.log('extraReducer')
            if (action.payload) {
                const newToken = action.payload.authorization.token;
                state.token = newToken;  // Update the token
                state.role = action.payload.role
                const decodedJWT: { exp: number } = jwtDecode(newToken);
                if (decodedJWT.exp) {
                    state.expiration = decodedJWT.exp;
                    const currentDate = new Date(Date.now());
                    const expDate = new Date(state.expiration * 1000);
                    state.isAuthenticated = currentDate < expDate;
                    sessionStorage.setItem('api_token', newToken)
                }
            }
        });
    }
})

export const { setToken, logout, setRole } = authSlicer.actions;
export default authSlicer.reducer;