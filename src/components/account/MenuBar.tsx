import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainNavBarSlice } from "../../features/account/bars/mainNavBar";
import { StoreState } from "../../features/store";
import s from "./MenuBar.module.css";

const MenuBar = () => {
	const { activeItem } = useSelector((state: StoreState) => state.mainNavBar);
	const dispatch = useDispatch();
	const selectColumn = (selectedColumn: string) => {
		dispatch(mainNavBarSlice.actions.activateItem(selectedColumn));
	};

	return (
		<div className={s.menu_bar_container}>
			<MenuItem
				text='Strategies'
				index='1'
				isActive={activeItem === "1"}
				onClick={selectColumn}
			/>
			<MenuItem
				text='Trades'
				index='2'
				isActive={activeItem === "2"}
				onClick={selectColumn}
			/>
			<span className='col-span-5' />
			<MenuItem
				text='Account Settings'
				index='3'
				onClick={selectColumn}
				isActive={activeItem === "3"}
			/>
		</div>
	);
};

type MenuItemProps = {
	text: string;
	index: string;
	onClick: (index: string) => void;
	isActive?: boolean;
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ text, index, isActive, onClick }) => {
	let className = s.menu_bar_item;

	if (isActive) {
		className = classNames(className, s.menu_bar_item_active);
	}

	return (
		<div className={className} onClick={() => onClick(index)}>
			<div>{text}</div>
		</div>
	);
};

export default MenuBar;
