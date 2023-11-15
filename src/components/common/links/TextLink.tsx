import React from "react";
import { Link } from "react-router-dom";
import s from "../common.module.css";

interface TextLinkProps {
	text: string;
	path: string;
}

const TextLink: React.FunctionComponent<TextLinkProps> = ({ path, text }) => (
	<div className='border-white border-2 w-fit p-2 rounded-xl mt-2'>
		<Link to={path} className={s.text_link}>
			{text}
		</Link>
	</div>
);

export default TextLink;
