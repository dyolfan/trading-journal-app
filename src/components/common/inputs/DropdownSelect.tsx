import classNames from "classnames";
import React from "react";
import { Field, FieldInputProps } from "react-final-form";
import Select from "react-select";
import sText from "../../../styles/texts.module.css";
import s from "./Input.module.css";

export type DropdownSelectValue = {
	label: string;
	value: string;
};

type BaseSelectProps = {
	label: string;
	options: object;
	isMulti?: boolean;
};

type DropdownSelectProps = {
	name: string;
} & BaseSelectProps;

const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = ({
	name,
	label,
	options,
	isMulti = false,
}) => (
	<Field
		name={name}
		render={({ input }) => (
			<SelectWithLabel isMulti={isMulti} input={input} options={options} label={label} />
		)}
	/>
);

type SelectWithLabelProps = {
	input: FieldInputProps<string, HTMLElement>;
} & BaseSelectProps;

const SelectWithLabel: React.FunctionComponent<SelectWithLabelProps> = ({
	input,
	label,
	options,
}) => {
	return (
		<div className={s.input_container}>
			<label className={classNames(sText.label_text, s.input_label)}>{label}</label>
			<Select
				inputValue={""}
				className={s.input_field_select}
				{...input}
				options={options as unknown as undefined}
			/>
		</div>
	);
};

export default DropdownSelect;
