import React, { MouseEventHandler } from "react";
import s from "./Button.module.css";

export interface ButtonProps {
	text: string;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: MouseEventHandler;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, type, onClick }) => (
	<button className={s.button} type={type} onClick={onClick}>
		{text}
	</button>
);

export default Button;
