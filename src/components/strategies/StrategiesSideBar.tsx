import classNames from "classnames";
import { useSelector } from "react-redux";
import { ROUTES } from "../../App";
import { StoreState } from "../../features/store";
import sLayout from "../../styles/layouts.module.css";
import { Strategy } from "../../types/model/api";
import SearchInput from "../common/inputs/SearchInput";
import TextLink from "../common/links/TextLink";
import s from "./StrategiesSideBar.module.css";

type StrategiesSideBarProps = {
	containerClassname?: string;
};

const StrategiesSideBar: React.FunctionComponent<StrategiesSideBarProps> = ({
	containerClassname,
}) => {
	const accountState = useSelector((state: StoreState) => state.loadAccount);

	let classNameContainer = sLayout.page_with_sidebar__sidebar;
	if (containerClassname) {
		classNameContainer = containerClassname;
	}
	classNameContainer = classNames(classNameContainer, s.sidebar_container);
	return (
		<div className={classNameContainer}>
			<div className='flex align-middle justify-center pb-3'>
				<SearchInput />
			</div>
			{accountState.account?.strategies.map((strategy) => (
				<StrategyItem strategy={strategy} />
			))}
		</div>
	);
};

export type StrategyItemProps = {
	strategy?: Strategy;
};

export const StrategyItem: React.FunctionComponent<StrategyItemProps> = ({ strategy }) => (
	<div className={s.strategy_item_container}>
		<div className={s.strategy_item_name}>{strategy ? strategy.name : "Strategy"}</div>
	</div>
);

export const StrategyBar: React.FunctionComponent = () => (
	<div className={s.strategy_bar_container}>
		<TextLink
			text='Add new strategy'
			path={ROUTES.ADD_STRATEGY}
			className={s.button_add_strategy_container}
			contentClassName={s.button_add_strategy}
		/>
	</div>
);

export default StrategiesSideBar;
