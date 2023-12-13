import { createAsyncThunk } from "@reduxjs/toolkit";


export const refreshToken = createAsyncThunk('auth/refreshToken', async (args, thunkAPI) => {
    try {
        const token = sessionStorage.getItem('api_token');

        const response = await fetch('http://127.0.0.1:8000/api/refresh', {
            method:'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();

        return data;
    } catch (error: any) {
        console.error('An error occurred:', error);
        return thunkAPI.rejectWithValue(error.message);
    }
});
