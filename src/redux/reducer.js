import { reducerCars } from './cars/sliceCars';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducerFavorite } from './favorite/sliceFavorite';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const favoritePersistConfig = {
    key: 'favorite',
    storage,
};

const persistedReducer = persistReducer(authPersistConfig, reducerCars);

export const reducer = {
    cars: persistedReducer,
    favorite: persistReducer(favoritePersistConfig, reducerFavorite),
};