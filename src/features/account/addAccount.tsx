import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerAccount } from "../../client/client";
import { Account } from "../../types/model/api";

export type AddAccountState = {
	loading: boolean;
	created: boolean;
	error: boolean;
};
export const addAccountSlice = createSlice({
	name: "addAccount",
	initialState: {
		loading: false,
		created: false,
		error: false,
		loaded: false,
	} as AddAccountState,
	reducers: {
		creatingAccount: (state: AddAccountState) => {
			state.loading = true;
			state.created = false;
			state.error = false;
		},
		createdAccount: (state: AddAccountState) => {
			state.loading = false;
			state.created = true;
			state.error = false;
		},
		failCreateAccount: (state: AddAccountState) => {
			state.loading = false;
			state.created = false;
			state.error = true;
		},
		clearCreateAccount: (state: AddAccountState) => {
			state.loading = false;
			state.created = false;
			state.error = false;
		},
	},
});

export const addAccount = createAsyncThunk("account/add", async (account: Account, api) => {
	api.dispatch(addAccountSlice.actions.creatingAccount());
	registerAccount(account)
		.then(() => {
			api.dispatch(addAccountSlice.actions.createdAccount());
		})
		.catch(() => api.dispatch(addAccountSlice.actions.failCreateAccount()));
});

export default addAccountSlice.reducer;
