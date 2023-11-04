import React, { useState } from "react";
import LogoBar from "./common/LogoBar";
import Input from "./common/inputs/Input";
import Form, { FormChildProps, FormLoader, FormPropsOnSubmit } from "./common/inputs/Form";
import Button from "./common/inputs/buttons/Button";
import ButtonPanel from "./common/inputs/buttons/ButtonPanel";
import s from "./Home.module.css";
import sText from "../styles/texts.module.css";
import TextLink from "./common/links/TextLink";

function Home() {
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
					<Form onSubmit={onSubmit}>
						{({ form }: FormChildProps) => (
							<>
								<div className='inputs_container'>
									{loading ? (
										<FormLoader />
									) : (
										<Input label='Account name' name='accountName' />
									)}
								</div>
								<ButtonPanel>
									<Button type='submit' text='Login' />
									<Button text='Clear' onClick={() => form.reset({})} />
								</ButtonPanel>
							</>
						)}
					</Form>
					<div className='flex-col mt-3.5'>
						<div className={sText.normal_text}>Dont have an account?</div>
						<div className='border-white border-2 w-fit p-2 rounded-xl mt-2'>
							<TextLink text='Register!' path='/register' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
