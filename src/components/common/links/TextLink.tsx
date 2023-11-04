import { Link } from "react-router-dom";
import React from "react";
import s from "../common.module.css";

interface TextLinkProps {
	text: string;
	path: string;
}

const TextLink: React.FunctionComponent<TextLinkProps> = ({ path, text }) => (
	<Link to={path} className={s.text_link}>
		{text}
	</Link>
);

export default TextLink;
