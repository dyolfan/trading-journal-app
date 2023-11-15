import axios from "axios";

type Account = {
	name: string;
};

export const registerAccount = async (payload: Account) => {
	const { data, status } = await axios
		.post<Account>(
			"/accounts/add",
			{ ...payload },
			{
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			},
		)
		.catch((reason) => {
			console.log(reason.response);
			return { status: reason.response.status, data: {} };
		});
	return { data, status };
};

export default { registerAccount };
