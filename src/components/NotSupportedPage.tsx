import React from "react";
import MenuBar from "./account/MenuBar";
import LogoBar from "./common/LogoBar";

const NotSupportedPage: React.FunctionComponent = () => {
	// const accountState = useSelector((state: StoreState) => state.loadAccount);

	return (
		<>
			<LogoBar />
			<MenuBar />
			<div className='text-main-white text-3xl text-center mt-10'>Not supported</div>
		</>
	);
};

export default NotSupportedPage;
