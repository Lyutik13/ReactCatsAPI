import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk<IItems[], string>("items/fetchItemsStatus", async (myKey) => {
	const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&${myKey}`);

	return data;
});

export interface IItems {
	id: number;
	url: string;
	height?: number;
	width?: number;
}

interface IInitialState {
	items: IItems[] | [];
	status: 'loading' | 'success' | 'error';
}

const initialState: IInitialState = {
	items: [],
	status: "loading", // loading | success | error
};

const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		setItems: (state, action: PayloadAction<IItems[]>) => {
			state.items = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.items = [...state.items, ...action.payload];
				state.status = "success";
			})
			.addCase(fetchItems.rejected, (state) => {
				state.status = "error";
				state.items = [];
			});
	},
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
