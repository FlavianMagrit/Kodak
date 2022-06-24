import React, {useState} from 'react';
import {CustomInput} from "../../components/Input/CustomInput";
import {login} from "../../utils/authentication/authentication";

export const Authentication = () => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	return (
		<div className="login-container">
			<h3> Connexion </h3>
			<div className="inputs-container">
				<CustomInput
					placeholder="E-mail"
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<CustomInput
					placeholder="Mot de passe"
					onChange={(e) => setLoginPassword(e.target.value)}
				/>

				<button onClick={() => login(loginEmail, loginPassword)}> Login</button>
			</div>
		</div>
	);
};