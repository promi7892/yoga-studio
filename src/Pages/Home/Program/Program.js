import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Program = (props) => {
	const { id, name, img, catagory, time, instructor, date, description } =
		props.program;

	return (
		<div className='col-lg-4 col-md-12 mx-auto container my-2 '>
			<Card style={{ width: '25rem' }} className='h-100 '>
				<Card.Img variant='top' src={img} className='h-100 w-100 p-3' />
				<Card.Body>
					<Card.Title className='text-center'>
						<h4>{name}</h4>
					</Card.Title>
					<Card.Text>
						<div className='d-flex justify-content-between mx-1'>
							<div className='catagory mx-2 px-1'>
								<p className=' py-3 '>
									<b>Catagory:</b>
									<br />
									{catagory}
								</p>
							</div>

							<div className='teacher mx-2 px-1'>
								<p className=' py-3 '>
									<b>Instructed By:</b> <br />
									{instructor}
								</p>
							</div>
						</div>
						<div className='time d-flex justify-content-evenly'>
							<p className=' py-3'>
								<small>{date}</small>
							</p>
							<p className=' py-3'>
								<small>{time}</small>
							</p>
						</div>
					</Card.Text>
					<Link to={`/booking/${description}`}>
						<Button className='border-0 w-100 rounded px-4 py-2 btn btn-info text-white fw-bold'>
							Book for Appointment
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Program;
