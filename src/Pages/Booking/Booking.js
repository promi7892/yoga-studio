import React from 'react';
import { useParams } from 'react-router';
import Program from '../Home/Program/Program';

const Booking = () => {
	const { serviceId } = useParams();

	return (
		<div className='container my-5'>
			<h4 className='text-center my-5'>
				<span className='text-info my-5'> Our Program Details</span> <br />{' '}
				<br />
			</h4>
			<p className='container w-50 mx-auto'>{serviceId}</p>
		</div>
	);
};

export default Booking;
