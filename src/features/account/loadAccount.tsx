import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAccountByName } from "../../client/client";
import { Account } from "../../types/model/api";

export type LoadAccountState = {
	loading: boolean;
	loaded: boolean;
	error: boolean;
	account?: Account;
};

export const loadAccountSlice = createSlice({
	name: "loadAccount",
	initialState: {
		loading: false,
		error: false,
		loaded: false,
	} as LoadAccountState,
	reducers: {
		startLoadingAccount: (state: LoadAccountState) => {
			state.loading = true;
		},
		storeAccount: (state: LoadAccountState, action) => {
			state.account = action.payload;
			state.loading = false;
			state.loaded = true;
		},
		loadingAccountFailed: (state: LoadAccountState) => {
			state.loading = false;
			state.loaded = false;
			state.error = true;
		},
		clearLoadingAccount: (state: LoadAccountState) => {
			state.loaded = false;
			state.error = false;
			state.loaded = false;
			state.account = undefined;
		},
	},
});

export type LoadAccountPayload = {
	accountName: string;
};
export const loadAccount = createAsyncThunk(
	"account/get",
	async (payload: LoadAccountPayload, api) => {
		api.dispatch(loadAccountSlice.actions.startLoadingAccount());
		fetchAccountByName(payload)
			.then(({ account }) => {
				api.dispatch(loadAccountSlice.actions.storeAccount(account));
			})
			.catch(() => api.dispatch(loadAccountSlice.actions.loadingAccountFailed()));
	},
);

export default loadAccountSlice.reducer;
