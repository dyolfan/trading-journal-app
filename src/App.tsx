import { Route, Router } from "electron-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import s from "./App.module.css";

function App() {
	return (
		<div className={s.body}>
			<Router
				main={
					<>
						<Route path='/' element={<Home />} />
						<Route path='/register' element={<Register />} />
					</>
				}
			/>
		</div>
	);
}

export default App;
