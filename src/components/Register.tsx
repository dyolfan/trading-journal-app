import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountSlice, addAccount } from "../features/login/account";
import { AppDispatch, StoreState } from "../features/store";
import t from "../styles/texts.module.css";
import { Account, AccountCurrency } from "../types/model/api";
import Button from "./common/inputs/buttons/Button";
import ButtonPanel from "./common/inputs/buttons/ButtonPanel";
import DropdownSelect, { DropdownSelectValue } from "./common/inputs/DropdownSelect";
import Form, { FormLoader, FormPropsOnSubmit } from "./common/inputs/Form";
import Input from "./common/inputs/Input";
import TextLink from "./common/links/TextLink";
import LogoBar from "./common/LogoBar";
import ActionMessage, { ActionMessageType } from "./common/messages/ActionMessage";
import s from "./Home.module.css";

type FormValues = {
	accountCurrency: DropdownSelectValue;
} & Account;

function Register() {
	const dispatch = useDispatch<AppDispatch>();
	const createAccountState = useSelector((state: StoreState) => state.account);

	const onSubmit: FormPropsOnSubmit<FormValues> = async (values, form) => {
		values.currency =
			AccountCurrency[values.accountCurrency.value as keyof typeof AccountCurrency];
		await dispatch(addAccount(values));
		if (createAccountState.created) {
			form.reset();
		}
	};

	useEffect(() => {
		dispatch(accountSlice.actions.clearCreateAccount());
	}, []);

	const options: DropdownSelectValue[] = [];
	Object.keys(AccountCurrency).forEach((it) => {
		options.push({ value: it, label: it });
	});

	return (
		<div>
			<LogoBar />
			<div className={s.home_container}>
				<div className={s.home_panel}>
					<div className={t.title_text}>Register</div>
					<Form<FormValues> onSubmit={onSubmit}>
						{() => (
							<>
								<div className='inputs_container'>
									{createAccountState.loading ? (
										<FormLoader />
									) : (
										<>
											<Input label='Account name' name='name' />
											<DropdownSelect
												name='accountCurrency'
												label='Currency'
												options={options}
											/>
										</>
									)}
								</div>
								<ButtonPanel>
									<Button
										type='submit'
										text='Register'
										disabled={createAccountState.loading}
									/>
								</ButtonPanel>
							</>
						)}
					</Form>
					{createAccountState.created && (
						<div className='flex flex-row justify-around'>
							<ActionMessage text='Done!' type={ActionMessageType.SUCCESS} />
							<TextLink text='Login!' path='/' />
						</div>
					)}
					{createAccountState.error && (
						<ActionMessage
							text='Failed to create account...'
							type={ActionMessageType.FAIL}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Register;
