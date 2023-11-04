import sText from "../../../styles/texts.module.css";
import classNames from "classnames";
import s from "./Input.module.css";
import { Field } from "react-final-form";
import React from "react";

interface InputProps {
	label: string;
	// value?: string | number | readonly string[] | undefined;
	name: string;
}

const Input: React.FC<InputProps> = ({ label, name }) => (
	<Field
		name={name}
		render={({ input }) => (
			<div className={s.input_container}>
				<label className={classNames(sText.label_text, s.input_label)}>{label}</label>
				<input className={s.input_field} {...input} />
			</div>
		)}
	/>
);

export default Input;
