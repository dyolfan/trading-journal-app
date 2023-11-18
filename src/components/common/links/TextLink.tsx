import React from "react";
import { Link } from "react-router-dom";
import s from "../common.module.css";

interface TextLinkProps {
	text: string;
	path: string;
	isActive?: boolean;
}

const TextLink: React.FunctionComponent<TextLinkProps> = ({ path, text, isActive = true }) => {
	let containerClassName = "border-2 w-fit p-2 rounded-xl mt-2";
	if (isActive) {
		containerClassName += " border-white";
	} else {
		containerClassName += " border-main";
	}

	return (
		<div className={containerClassName}>
			{isActive ? (
				<Link to={path} className={s.text_link}>
					{text}
				</Link>
			) : (
				<span className={s.text_link_disabled}>{text}</span>
			)}
		</div>
	);
};

export default TextLink;
