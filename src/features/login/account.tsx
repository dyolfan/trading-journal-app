import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerAccount } from "../../client/client";
import { Account } from "../../types/model/api";

export type CreateAccountState = {
	loading: boolean;
	created: boolean;
	error: boolean;
	data: object;
	result: object;
};

export const accountSlice = createSlice({
	name: "account",
	initialState: {
		loading: false,
		created: false,
		error: false,
		data: {},
		result: {},
	} as CreateAccountState,
	reducers: {
		creatingAccount: (state: CreateAccountState) => {
			console.log("Sent create account");
			state.loading = true;
			state.created = false;
		},
		createdAccount: (state: CreateAccountState) => {
			console.log("account created");
			state.loading = false;
			state.created = true;
		},
		failCreateAccount: (state: CreateAccountState) => {
			console.log("account creating failed");
			state.loading = false;
			state.created = false;
			state.error = true;
		},
		clearCreateAccount: (state: CreateAccountState) => {
			state.loading = false;
			state.created = false;
		},
	},
});

export const addAccount = createAsyncThunk("account/add", async (account: Account, api) => {
	api.dispatch(accountSlice.actions.creatingAccount());
	console.log({ account });
	registerAccount(account).then(({ status }) => {
		if (status === 200) {
			api.dispatch(accountSlice.actions.createdAccount());
		} else {
			api.dispatch(accountSlice.actions.failCreateAccount());
		}
	});
});

export default accountSlice.reducer;
