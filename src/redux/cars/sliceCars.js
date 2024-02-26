import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operationsCars';

const handlePending = state => {
    state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.allCars = payload;
    state.page += 1;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const initialStateCars = {
    allCars: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 12,
};

export const sliceCars = createSlice({
    name: 'cars',
    initialState: initialStateCars,
    extraReducers: builder => {
        builder
            .addCase(getAllCars.fulfilled, handleFulfilled)
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    },
});

export const reducerCars = sliceCars.reducer;
