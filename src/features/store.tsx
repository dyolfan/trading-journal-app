import { configureStore } from "@reduxjs/toolkit";
import accountReducer, { AccountState } from "./login/account";

export type StoreState = {
	account: AccountState;
};

const store = configureStore({
	reducer: {
		account: accountReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
