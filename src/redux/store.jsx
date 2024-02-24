import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './cats/slice';

export const store = configureStore({
	reducer: {
    cats: catsReducer
  },
});
