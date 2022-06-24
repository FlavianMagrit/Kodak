import {useContext} from "react";
import {UserContext} from "../App";

export const HomePage = () => {

	const { user } = useContext(UserContext)

	return (
		<>
			<h1>Bonjour {user.displayName ?? user.email}</h1>
		</>
	);
};
