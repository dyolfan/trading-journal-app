import classNames from "classnames";
import React from "react";
import sText from "../../../styles/texts.module.css";
import sMessages from "../../../styles/messages.module.css";
import cs from "../common.module.css";

export type ActionMessageProps = {
	text: string;
	type: ActionMessageType;
	description?: string;
};

export enum ActionMessageType {
	SUCCESS,
	FAIL,
	WARNING,
}

const ActionMessage: React.FunctionComponent<ActionMessageProps> = ({
	text,
	type,
	description,
}) => {
	if (description) {
		return (
			<div className={sMessages.message_with_details_container}>
				<ActionMessageInner text={text} type={type} />
				<div className={sText.normal_text}>Please check account name.</div>
			</div>
		);
	}

	return <ActionMessageInner type={type} text={text} />;
};

const ActionMessageInner: React.FunctionComponent<ActionMessageProps> = ({ type, text }) => {
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
