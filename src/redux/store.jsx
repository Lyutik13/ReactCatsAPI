import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './cats/slice';
import itemsReducer from './items/itemSlice';

export const store = configureStore({
	reducer: {
		cats: catsReducer,
		items: itemsReducer,
	},
});
