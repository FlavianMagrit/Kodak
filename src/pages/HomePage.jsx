import {useContext} from "react";
import {Menu} from "../containers/Menu/Menu";
import {UserContext} from "../App";

export const HomePage = () => {

	const { user } = useContext(UserContext)

	return (
		<>
			<Menu />
			<h1>Bonjour {user.displayName ?? user.email}</h1>
		</>
	);
};
