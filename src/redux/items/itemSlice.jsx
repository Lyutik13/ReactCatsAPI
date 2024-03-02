import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItemsStatus', async (myKey) => {
	const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=1&${myKey}`);

	return data;
});

const initialState = {
	items: [],
	status: 'loading', // loading | success | error
};

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchItems.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.items = [...state.items, ...action.payload];
				state.status = 'success';
			})
			.addCase(fetchItems.rejected, (state) => {
				state.status = 'error';
				state.items = [];
			});
	},
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
