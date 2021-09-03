import React, { useContext } from "react";
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { HeroScreen } from '../components/heroes/HeroScreen';
import { LoginScreen } from "../components/login/LoginScreen";
import { Context as UserContext } from "../context/UserContext";

export const AppRouter = () => {
	const { state: { user }} = useContext(UserContext);

	return (

		<Router>
			<div>
				<Switch>
					{ (!user) && (
						<Route exact path="/" component={LoginScreen} />
					)}
					{ (user) && (
						<Route exact path="/" component={HeroScreen} />
					)}
				</Switch>
			</div>
		</Router>
	)
}
