import { Link } from "react-router-dom";
import s from "./common.module.css";

function LogoBar() {
	return (
		<Link to={"/"}>
			<div className={s.logo_container}>
				<img src='/assets/image/TJ_Logo_w_nbg.png' alt='logo' className='h-20' />
			</div>
		</Link>
	);
}

export default LogoBar;
