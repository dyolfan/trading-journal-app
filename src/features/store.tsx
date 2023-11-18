import { configureStore } from "@reduxjs/toolkit";
import addAccountSlice, { AddAccountState } from "./account/addAccount";
import loadAccountSlice, { LoadAccountState } from "./account/loadAccount";

export type StoreState = {
	addAccount: AddAccountState;
	loadAccount: LoadAccountState;
};

const store = configureStore({
	reducer: {
		addAccount: addAccountSlice,
		loadAccount: loadAccountSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
