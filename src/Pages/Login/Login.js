import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
	const { signInUsingGoogle } = useAuth();

	return (
		<div>
			{/* <Form className='container w-50 mx-auto my-5'>
				<Button className='mx-auto'>Sign in with Google</Button>

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Remember Password' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form> */}
			<h2>Please login</h2>

			<button onClick={signInUsingGoogle}>Google Sign in</button>
			<br />
			<Link to='/register'>New Register??</Link>
		</div>
	);
};

export default Login;
