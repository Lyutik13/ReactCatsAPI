import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CatsState {
  categoriesHeaderIndex: number;
}

const initialState: CatsState = {
  categoriesHeaderIndex: 0,
};

const catsSlice = createSlice({
	name: 'cats',
	initialState,
	reducers: {
		setCategoriesHeaderIndex: (state, action: PayloadAction<number>) => {
			state.categoriesHeaderIndex = action.payload;
		},
	},
});

export const { setCategoriesHeaderIndex } = catsSlice.actions;

export default catsSlice.reducer;
