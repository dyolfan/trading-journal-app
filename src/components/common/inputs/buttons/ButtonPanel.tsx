import React from "react";

export interface ButtonPanelProps {
	children: React.ReactNode;
}

const ButtonPanel: React.FunctionComponent<ButtonPanelProps> = ({ children }) => {
	return <div className='flex flex-row m-4 justify-center'>{children}</div>;
};

export default ButtonPanel;
