import classNames from "classnames";
import React from "react";
import cs from "../common.module.css";

export type ActionMessageProps = {
	text: string;
	type: ActionMessageType;
};

export enum ActionMessageType {
	SUCCESS,
	FAIL,
	WARNING,
}

const ActionMessage: React.FunctionComponent<ActionMessageProps> = ({ text, type }) => {
	let imagePath = "/assets/image/icons/warning-sign.svg";
	let className = "w-10 h-10";
	if (type === ActionMessageType.SUCCESS) {
		imagePath = "/assets/image/icons/green_tick.svg";
	} else if (type === ActionMessageType.FAIL) {
		imagePath = "/assets/image/icons/red-x.svg";
		className = "w-6 h-6";
	}

	return (
		<div className={cs.flex_row_container_centered}>
			<img src={imagePath} className={className} alt='tick icon' />
			<div className={classNames(cs.text_xl, "ml-5")}>{text}</div>
		</div>
	);
};

export default ActionMessage;
