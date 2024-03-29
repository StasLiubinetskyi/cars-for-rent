import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operationsCars';

const initialStateCars = {
    allCars: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 12,
    selectedPrice: null,
};

const sliceCars = createSlice({
    name: 'cars',
    initialState: initialStateCars,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.allCars = action.payload;
                state.page += 1;
            })
            .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
                state.isLoading = true;
            })
            .addMatcher((action) => action.type.endsWith('/rejected'), (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: reducerCars } = sliceCars;
