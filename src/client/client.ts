import axios from "axios";
import { LoadAccountPayload } from "../features/account/loadAccount";
import { Account } from "../types/model/api";

const headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

export const registerAccount = async (payload: Account) => {
	const { data, status } = await axios.post<Account>(
		"/accounts/add",
		{ ...payload },
		{ headers },
	);
	return { data, status };
};

export const fetchAccountByName = async (payload: LoadAccountPayload) => {
	const { data, status } = await axios.get<Account>("/accounts/name", {
		params: { ...payload },
		headers,
	});
	return { account: { ...data }, status };
};

export default { registerAccount };
