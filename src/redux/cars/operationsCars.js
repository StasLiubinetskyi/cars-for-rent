import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65f458d4f54db27bc02178bd.mockapi.io';

export const getAllCars = createAsyncThunk(
    'cars/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/adverts');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);