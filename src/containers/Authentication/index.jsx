import React, {createRef, useContext, useRef, useState} from 'react';
import {CustomInput} from "../../components/Input/CustomInput";
import {login} from "../../utils/authentication/authentication";
import {UserContext} from "../../App";

const checkboxRef = createRef();

export const Authentication = () => {
	const [error, setIsError] = useState(false);
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const hasToBeSaveRef = useRef(checkboxRef);

	const { setUser } = useContext(UserContext);

	const handleConnexion = () => {
		setIsError(false);

		login(loginEmail, loginPassword)
			.then(userAuthInfo => {
				console.log(userAuthInfo.user)
				if(hasToBeSaveRef.current.checked) {
					localStorage.setItem('user', JSON.stringify(userAuthInfo.user));
				}
				setUser(userAuthInfo.user);
			})
			.catch(() => setIsError(true))
	}

	return (
		<div className="login-container">
			<h3> Connexion </h3>
			<div className="inputs-container">
				<CustomInput
					name='email'
					type='text'
					placeholder="E-mail"
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<CustomInput
					name='password'
					type='password'
					placeholder="Mot de passe"
					onChange={(e) => setLoginPassword(e.target.value)}
				/>

				{ error && <p className='error'>Erreur dans ton login</p>}

				<button onClick={() => handleConnexion()}>Login</button>

				<div>
					<input type="checkbox" id="remind-me" name="remind-me" ref={checkboxRef}/>
					<label htmlFor="remind-me">Se souvenir de moi</label>
				</div>
			</div>
		</div>
	);
};