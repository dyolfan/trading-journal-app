import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../features/store";
import sLayout from "../../styles/layouts.module.css";
import LogoBar from "../common/LogoBar";
import StrategiesSideBar, { StrategyBar } from "../strategies/StrategiesSideBar";
import MenuBar from "./MenuBar";

function StrategiesPage() {
	const accountState = useSelector((state: StoreState) => state.loadAccount);

	return (
		<>
			<LogoBar />
			<MenuBar />
			<div>
				<StrategyBar />
				<div className={sLayout.page_with_sidebar__container}>
					<StrategiesSideBar />
					<div className={sLayout.page_with_sidebar__content}>
						<div>Strategies page</div>
						<div>{accountState.account?.id}</div>
						<div>{accountState.account?.name}</div>
						<div>{accountState.account?.currency}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StrategiesPage;
