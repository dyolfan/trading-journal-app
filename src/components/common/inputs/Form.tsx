import { FormApi, SubmissionErrors, ValidationErrors } from "final-form";
import React from "react";
import { Form } from "react-final-form";
import { PropagateLoader } from "react-spinners";

export type FormPropsOnSubmit = (
	values: object,
	form: FormApi<object, Partial<object>>,
	callback?: (errors?: SubmissionErrors) => void,
) => SubmissionErrors | Promise<SubmissionErrors> | void;

export interface FormProps {
	children: React.FunctionComponent<FormChildProps>;
	onSubmit: FormPropsOnSubmit;
	validate?: (values: object) => ValidationErrors | Promise<ValidationErrors>;
}

export type FormChildProps = {
	form: FormApi<Record<string, object>>;
};

function MyForm({ onSubmit, children }: FormProps) {
	return (
		<Form
			onSubmit={onSubmit}
			// validate={validate}
			render={({ handleSubmit, form }) => (
				<>
					<form onSubmit={handleSubmit}>{children({ form } as FormChildProps)}</form>
				</>
			)}
		/>
	);
}

export const FormLoader: React.FunctionComponent = () => (
	<div className='flex justify-center align-middle pt-5 h-10'>
		<div>
			<PropagateLoader color='white' />
		</div>
	</div>
);

export default MyForm;
