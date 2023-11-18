import { Link } from "react-router-dom";
import s from "./common.module.css";

function LogoBar() {
	return (
		<div className={s.logo_container}>
			<Link to={"/"} className='col-start-3 col-span-1'>
				<img src='/assets/image/TJ_Logo_w_nbg.png' alt='logo' className='h-20' />
			</Link>
		</div>
	);
}

export default LogoBar;
