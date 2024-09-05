import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./cats/slice";
import itemsReducer from "./items/itemSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		cats: catsReducer,
		items: itemsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
