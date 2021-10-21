import React from 'react';
import notfound from '../../Images/404.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<div className=' container fluid'>
				<h1 className='text-dark mt-5 text-center'>Oh No! Page Not Found</h1>
				<img className='not-found mx-auto w-100' src={notfound} alt='' />
				<Link to='/'>
					<button className='secondary mx-auto'>Go back</button>{' '}
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
