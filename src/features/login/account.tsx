import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { fetchAccountByName, registerAccount } from "../../client/client";
import { Account } from "../../types/model/api";

export type AccountState = {
	loading: boolean;
	created: boolean;
	loaded: boolean;
	error: boolean;
	data: object;
	result: object;
	account?: Account;
};

export const accountSlice = createSlice({
	name: "account",
	initialState: {
		loading: false,
		created: false,
		error: false,
		loaded: false,
	} as AccountState,
	reducers: {
		creatingAccount: (state: AccountState) => {
			state.loading = true;
			state.created = false;
		},
		createdAccount: (state: AccountState) => {
			state.loading = false;
			state.created = true;
		},
		failCreateAccount: (state: AccountState) => {
			state.loading = false;
			state.created = false;
			state.error = true;
		},
		clearCreateAccount: (state: AccountState) => {
			state.loading = false;
			state.created = false;
		},
		startGettingAccount: (state: AccountState) => {
			state.loading = true;
		},
		storeAccount: (state: AccountState, action) => {
			state.account = action.payload;
			state.loading = false;
			state.loaded = true;
		},
		storeAccountFailed: (state: AccountState) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const addAccount = createAsyncThunk("account/add", async (account: Account, api) => {
	api.dispatch(accountSlice.actions.creatingAccount());
	registerAccount(account)
		.then(() => {
			api.dispatch(accountSlice.actions.createdAccount());
		})
		.catch(() => api.dispatch(accountSlice.actions.failCreateAccount()));
});

export type GetAccountPayload = {
	accountName: string;
};
export const getAccount = createAsyncThunk(
	"account/get",
	async (payload: GetAccountPayload, api) => {
		api.dispatch(accountSlice.actions.startGettingAccount());
		fetchAccountByName(payload)
			.then(({ account }) => {
				api.dispatch(accountSlice.actions.storeAccount(account));
				const navigate = useNavigate();
				navigate("/account-start");
			})
			.catch(() => api.dispatch(accountSlice.actions.storeAccountFailed()));
		return {} as Account;
	},
);

export default accountSlice.reducer;
