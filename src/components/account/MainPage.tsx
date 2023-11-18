import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../features/store";
import LogoBar from "../common/LogoBar";
import s from "../Home.module.css";
import MenuBar from "./MenuBar";

function MainPage() {
	const accountState = useSelector((state: StoreState) => state.loadAccount);

	return (
		<div>
			<LogoBar />
			<MenuBar />
			<div className={s.home_container + " text-white text-center"}>
				<div>Account page</div>
				<div>{accountState.account?.id}</div>
				<div>{accountState.account?.name}</div>
				<div>{accountState.account?.currency}</div>
			</div>
		</div>
	);
}

export default MainPage;
