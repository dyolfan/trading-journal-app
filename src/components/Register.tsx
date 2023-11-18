import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAccountSlice, addAccount } from "../features/account/addAccount";
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
	const addAccountState = useSelector((state: StoreState) => state.addAccount);

	const onSubmit: FormPropsOnSubmit<FormValues> = async (values, form) => {
		values.currency =
			AccountCurrency[values.accountCurrency.value as keyof typeof AccountCurrency];
		await dispatch(addAccount(values));
		if (addAccountState.created) {
			form.reset();
		}
	};

	useEffect(() => {
		dispatch(addAccountSlice.actions.clearCreateAccount());
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
									{addAccountState.loading ? (
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
										disabled={addAccountState.loading}
									/>
								</ButtonPanel>
							</>
						)}
					</Form>
					{addAccountState.created && (
						<div className='flex flex-row justify-around'>
							<ActionMessage text='Done!' type={ActionMessageType.SUCCESS} />
							<TextLink text='Login' path='/' />
						</div>
					)}
					{addAccountState.error && (
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
