import { useContext } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import {db} from "../../utils/firebase-config";

const ProfilePage = () => {
	const { user } = useContext(UserContext);
	const { path, url } = useRouteMatch();
	const { register, handleSubmit } = useForm();

	const saveUserInfo = (information) =>
		setDoc(doc(db, "user", user.uid), information)
			.then(() => console.log('User save !'));

	return (
		<main className='layout-profile'>
			<h2>Bonjour {user.displayName ?? user.email}</h2>

			<div className="flex">
				<ul>
					<li>
						<Link to={`${url}/my-account`}>Mon compte</Link>
					</li>
					<li>
						<Link to={`${url}/address-list`}>Liste d'adresses</Link>
					</li>
					<li>
						<Link to={`${url}/orders`}>Mes commandes</Link>
					</li>
					<li>
						<Link to={`${url}/means-of-payment`}>Moyens de paiement</Link>
					</li>
				</ul>

				<Switch>
					<Route path={`${path}/address-list`}>
						<form>
	toto
						</form>
					</Route>
					<Route path={`${path}/orders`}>
						<form>
	toa
						</form>
					</Route>
					<Route path={`${path}/means-of-payment`}>
						<form>
	tote
						</form>
					</Route>

					<Route path={`${path}`}>
						<div className="flex-column ml-4">
							<h3>Mon compte</h3>
							<form className='ml-4' onSubmit={handleSubmit(saveUserInfo)}>
								<div className={'flex-column'}>
									<label>Nom</label>
									<CustomInput placeholder={'Edouard Martin'} type={'text'} {...register("name")}/>
								</div>
								<div className={'flex-column'}>
									<label>Adresse mail</label>
									<CustomInput placeholder={'edouard.martin@gmail.com'} type={'email'} {...register("email")}/>
								</div>
								<div className={'flex-column'}>
									<label>Mot de passe</label>
									<CustomInput placeholder={'exempledemotdepasse'} type={'password'} {...register("password")}/>
								</div>
								<div className={'flex-column'}>
									<label>Téléphone</label>
									<CustomInput placeholder={'0793234323'} type={'number'} {...register("phone")}/>
								</div>
								<div className={'flex-column'}>
									<label>Newsletter</label>
									<CustomInput type={'checkbox'} {...register("newsletter")}/>
								</div>

								<div className="align-end">
									<CustomButton placeholder="ENREGISTRER" color="red" className="bold mt-5" />
								</div>
							</form>
						</div>
					</Route>

				</Switch>
			</div>
		</main>
	);
};

export default ProfilePage;