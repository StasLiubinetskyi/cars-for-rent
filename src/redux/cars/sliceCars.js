import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operationsCars';

const initialStateCars = {
    allCars: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 12,
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.allCars = action.payload;
    state.page += 1;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const sliceCars = createSlice({
    name: 'cars',
    initialState: initialStateCars,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled, handleFulfilled)
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected);
    },
});

export const reducerCars = sliceCars.reducer;
