import React, { useState } from "react";
import sText from "../styles/texts.module.css";
import Button from "./common/inputs/buttons/Button";
import ButtonPanel from "./common/inputs/buttons/ButtonPanel";
import Form, { FormChildProps, FormLoader, FormPropsOnSubmit } from "./common/inputs/Form";
import Input from "./common/inputs/Input";
import TextLink from "./common/links/TextLink";
import LogoBar from "./common/LogoBar";
import s from "./Home.module.css";

function Home() {
	const [loading, setLoading] = useState(false);
	const onSubmit: FormPropsOnSubmit<{ accountName: string }> = async (values) => {
		setLoading(!loading);
		console.log(values);
	};

	return (
		<div>
			<LogoBar />
			<div className={s.home_container}>
				<div className={s.home_panel}>
					<Form<{ accountName: string }> onSubmit={onSubmit}>
						{({ form }: FormChildProps<{ accountName: string }>) => (
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
									<Button
										type='reset'
										text='Clear'
										onClick={() => form.reset({})}
									/>
								</ButtonPanel>
							</>
						)}
					</Form>
					<div className='flex-col mt-3.5'>
						<div className={sText.normal_text}>Dont have an account?</div>
						<TextLink text='Register!' path='/register' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
