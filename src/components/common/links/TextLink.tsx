import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import s from "../common.module.css";

interface TextLinkProps {
	text: string;
	path: string;
	isActive?: boolean;
	className?: string;
	contentClassName?: string;
	onClick?: () => void;
}

const TextLink: React.FunctionComponent<TextLinkProps> = ({
	path,
	text,
	className,
	isActive = true,
	onClick,
	contentClassName,
}) => {
	let containerClassName = "border-main";
	if (isActive) {
		containerClassName += "border-white";
	}
	containerClassName = classNames(containerClassName, className, s.text_link_container);

	return (
		<div className={containerClassName}>
			{isActive ? (
				<Link
					to={path}
					className={classNames(s.text_link, contentClassName)}
					onClick={onClick}
				>
					{text}
				</Link>
			) : (
				<span className={s.text_link_disabled}>{text}</span>
			)}
		</div>
	);
};

export default TextLink;
