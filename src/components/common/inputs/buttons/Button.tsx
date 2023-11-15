import classNames from "classnames";
import React, { MouseEventHandler } from "react";
import s from "./Button.module.css";

export interface ButtonProps {
	text: string;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: MouseEventHandler;
	disabled?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, type, onClick, disabled }) => {
	const buttonClasses = classNames(s.button, disabled ? s.button_disabled : null);

	return (
		<button className={buttonClasses} type={type} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
