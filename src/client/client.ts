import axios from "axios";
import Account, { GetAccountPayload } from "../features/login/account";

type Account = {
	name: string;
};

const headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

export const registerAccount = async (payload: Account) => {
	const { data, status } = await axios
		.post<Account>("/accounts/add", { ...payload }, { headers })
		.catch((reason) => {
			return { status: reason.response.status, data: {} };
		});
	return { data, status };
};

export const fetchAccountByName = async (payload: GetAccountPayload) => {
	const { data, status } = await axios.get<Account>("/accounts/name", {
		params: { ...payload },
		headers,
	});
	return { account: { ...data }, status };
};

export default { registerAccount };
