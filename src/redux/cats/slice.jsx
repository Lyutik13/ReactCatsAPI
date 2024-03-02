import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoriesHeaderIndex: 0,
};

const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {
		setCategoriesHeaderIndex: (state, action) => {
			state.categoriesHeaderIndex = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCategoriesHeaderIndex } = catsSlice.actions;

export default catsSlice.reducer;
