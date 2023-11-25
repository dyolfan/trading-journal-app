import { Route, Router } from "electron-router-dom";
import s from "./App.module.css";
import StrategiesPage from "./components/account/StrategiesPage";
import Home from "./components/Home";
import NotSupportedPage from "./components/NotSupportedPage";
import Register from "./components/Register";

export const ROUTES = {
	HOME: "/",
	REGISTER: "/register",
	STRATEGIES: "/strategies",
	ADD_STRATEGY: "/strategies/add",
	TRADES: "/trades",
	ACCOUNT_SETTINGS: "/account/settings",
	NOT_FOUND: "/404",
};

function App() {
	return (
		<div className={s.body}>
			<Router
				main={
					<>
						<Route path={ROUTES.HOME} element={<Home />} />
						<Route path={ROUTES.REGISTER} element={<Register />} />
						<Route path={ROUTES.STRATEGIES} element={<StrategiesPage />} />
						<Route path='*' element={<NotSupportedPage />} />
					</>
				}
			/>
		</div>
	);
}

export default App;
