import { createSlice } from '@reduxjs/toolkit';

const sliceFavorite = createSlice({
    name: 'favorite',
    initialState: {
        arrayOfFavorite: [],
    },

    reducers: {
        addToFavorite: (state, { payload }) => {
            state.arrayOfFavorite.push(payload);
        },

        removeFromFavorite: (state, { payload }) => {
            state.arrayOfFavorite = state.arrayOfFavorite.filter(
                car => car.id !== payload.id
            );
        },
    },
});

export const { addToFavorite, removeFromFavorite } = sliceFavorite.actions;
export const reducerFavorite = sliceFavorite.reducer;