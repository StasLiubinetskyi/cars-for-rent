import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operationsCars';

const initialStateCars = {
    allCars: [],
    isLoading: false,
    error: null,
};

export const sliceCars = createSlice({
    name: 'cars',
    initialState: initialStateCars,
    extraReducers: builder => {
        builder
            .addCase(getAllCars.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllCars.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.allCars = payload;
            })
            .addCase(getAllCars.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const reducerCars = sliceCars.reducer;
