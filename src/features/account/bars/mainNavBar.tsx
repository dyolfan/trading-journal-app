import { createSlice } from "@reduxjs/toolkit";

export type MainNavBarState = {
	activeItem: string;
};

export const mainNavBarSlice = createSlice({
	name: "mainNavBar",
	initialState: {
		activeItem: "1",
	} as MainNavBarState,
	reducers: {
		activateItem: (state: MainNavBarState, action) => {
			state.activeItem = action.payload;
		},
	},
});

export default mainNavBarSlice.reducer;
