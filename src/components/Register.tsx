import LogoBar from "./common/LogoBar";
import s from "./Home.module.css";
import t from "../styles/texts.module.css";
import Form, { FormLoader, FormPropsOnSubmit } from "./common/inputs/Form";
import Input from "./common/inputs/Input";
import ButtonPanel from "./common/inputs/buttons/ButtonPanel";
import Button from "./common/inputs/buttons/Button";
import React, { useState } from "react";

function Register() {
	const [loading, setLoading] = useState(false);
	const onSubmit: FormPropsOnSubmit = (values) => {
		setLoading(!loading);
		console.log(values);
	};
	return (
		<div>
			<LogoBar />
			<div className={s.home_container}>
				<div className={s.home_panel}>
					<div className={t.title_text}>Register</div>
					<Form onSubmit={onSubmit}>
						{() => (
							<>
								<div className='inputs_container'>
									{loading ? (
										<FormLoader />
									) : (
										<Input label='Account name' name='accountName' />
									)}
								</div>
								<ButtonPanel>
									<Button type='submit' text='Register' />
								</ButtonPanel>
							</>
						)}
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Register;
