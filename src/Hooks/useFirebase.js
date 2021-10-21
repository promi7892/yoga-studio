import { useEffect, useState } from 'react';

import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import initializeAuthentication from '../Pages/Login/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	// const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {})
			.finally(() => setIsLoading(false));
	};

	return {
		user,
		signInUsingGoogle,
		logOut,
	};
};

export default useFirebase;
