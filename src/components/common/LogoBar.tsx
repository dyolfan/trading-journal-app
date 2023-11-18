import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadAccountSlice } from "../../features/account/loadAccount";
import { AppDispatch, StoreState } from "../../features/store";
import sText from "../../styles/texts.module.css";
import s from "./common.module.css";
import TextLink from "./links/TextLink";

function LogoBar() {
	const accountState = useSelector((state: StoreState) => state.loadAccount);
	const dispatch = useDispatch<AppDispatch>();

	const isLoggedIn = accountState.account != undefined;
	const accountName = accountState.account?.name;

	const onChangeAccountClick = () => {
		dispatch(loadAccountSlice.actions.clearAccount());
	};

	return (
		<div className={s.logo_container}>
			{isLoggedIn && (
				<div className={"flex items-center pl-10 " + sText.text_big_central}>
					{accountName}
				</div>
			)}
			<Link
				to={"/"}
				className='col-start-3 col-span-1 w-full h-full'
				style={{ minWidth: "400px" }}
			>
				<img src='/assets/image/TJ_Logo_w_nbg.png' alt='logo' className='h-20' />
			</Link>
			{isLoggedIn && (
				<TextLink
					className='col-start-5 col-span-1 self-center justify-self-end mr-10'
					text='Change account'
					path='/'
					isActive={!accountState.loading}
					onClick={() => onChangeAccountClick()}
				/>
			)}
		</div>
	);
}

export default LogoBar;
