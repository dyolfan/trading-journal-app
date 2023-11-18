import { configureStore } from "@reduxjs/toolkit";
import addAccountSlice, { AddAccountState } from "./account/addAccount";
import mainNavBarSlice, { MainNavBarState } from "./account/bars/mainNavBar";
import loadAccountSlice, { LoadAccountState } from "./account/loadAccount";

export type StoreState = {
	addAccount: AddAccountState;
	loadAccount: LoadAccountState;
	mainNavBar: MainNavBarState;
};

const store = configureStore({
	reducer: {
		addAccount: addAccountSlice,
		loadAccount: loadAccountSlice,
		mainNavBar: mainNavBarSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
