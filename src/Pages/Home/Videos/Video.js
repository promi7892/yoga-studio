import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAward,
	faChalkboardTeacher,
	faUser,
	faCalendar,
} from '@fortawesome/free-solid-svg-icons';

const Video = () => {
	const award = (
		<FontAwesomeIcon
			className='text-center mx-3 my-3'
			icon={faAward}
			style={{ fontSize: '4rem' }}
		/>
	);
	const trainer = (
		<FontAwesomeIcon
			className='text-center mx-3 my-3'
			icon={faChalkboardTeacher}
			style={{ fontSize: '4rem' }}
		/>
	);
	const student = (
		<FontAwesomeIcon
			className='text-center mx-3 my-3'
			icon={faUser}
			style={{ fontSize: '4rem' }}
		/>
	);
	const course = (
		<FontAwesomeIcon
			className='text-center mx-3 my-3'
			icon={faCalendar}
			style={{ fontSize: '4rem' }}
		/>
	);

	return (
		<div className='container image-added h-100'>
			<h1 className='text-center fw-bolder my-5'>Our Achievements</h1>
			<Container className='mx-5'>
				<Row>
					<Col>
						{trainer} <br />
						<h1>18+</h1>
						Our Trainers
					</Col>
					<Col>
						{award} <br />
						<h1>15+</h1>
						Win Awards
					</Col>
					<Col>
						{student} <br />
						<h1>1800+</h1> Happy Member
					</Col>
					<Col>
						{course} <br />
						<br />
						<h1>45+ </h1>Monthly Classes
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Video;
