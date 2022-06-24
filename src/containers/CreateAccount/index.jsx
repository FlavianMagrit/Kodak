import {useState} from "react";
import { register } from '../../utils/authentication/authentication';

export const CreateAccount = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	return (
		<div>
		  <h3> Register User </h3>
		  <input
		    placeholder="Email..."
		    onChange={(e) => {
		      setRegisterEmail(e.target.value);
		    }}
		  />
		  <input
		    placeholder="Password..."
		    onChange={(e) => {
		      setRegisterPassword(e.target.value);
		    }}
		  />

		  <button onClick={() => register(registerEmail, registerPassword)}>
		    Create User
		  </button>
		</div>
	);
};



