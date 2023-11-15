import { FormApi, SubmissionErrors, ValidationErrors } from "final-form";
import React from "react";
import { Form } from "react-final-form";
import { PropagateLoader } from "react-spinners";

export type FormPropsOnSubmit<T> = (
	values: T,
	form: FormApi<T, Partial<T>>,
	callback?: (errors?: SubmissionErrors) => void,
) => SubmissionErrors | Promise<SubmissionErrors> | void;

export interface FormProps<T> {
	children: React.FunctionComponent<FormChildProps<T>>;
	onSubmit: FormPropsOnSubmit<T>;
	validate?: (values: T) => ValidationErrors | Promise<ValidationErrors>;
}

export interface FormChildProps<T> {
	form: FormApi<T>;
}

export interface MyFormComp<T> extends React.FunctionComponent<FormProps<T>> {}

const MyForm = <T,>({ onSubmit, children }: FormProps<T>) => {
	return (
		<Form
			onSubmit={onSubmit}
			destroyOnUnregister={true}
			render={({ handleSubmit, form }) => (
				<>
					<form onSubmit={handleSubmit}>{children({ form })}</form>
				</>
			)}
		/>
	);
};
export const FormLoader: React.FunctionComponent = () => (
	<div className='flex justify-center align-middle pt-5 h-10'>
		<div>
			<PropagateLoader color='white' />
		</div>
	</div>
);

export default MyForm;
