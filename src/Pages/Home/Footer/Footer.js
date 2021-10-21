import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMobile,
	faLocationArrow,
	faMailBulk,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	const location = <FontAwesomeIcon icon={faLocationArrow} />;
	const mobile = <FontAwesomeIcon icon={faMobile} />;
	const mail = <FontAwesomeIcon icon={faMailBulk} />;
	const arrow = <FontAwesomeIcon icon={faArrowRight} />;

	return (
		<div>
			<Container fluid className='bg-dark text-white'>
				<Row className='container mx-auto footer '>
					<Col className='mx-3'>
						<div className='footer-heading'>
							<h5>About Us</h5>
							<h6>Step towards Joyful Living </h6>
							<p>
								With us, you can find balance, harmony and energy in the hectic
								hassle of everyday pressure and deadlines. Relax and Enjoy the
								perfect experience of a true Yoga at our studio.
							</p>
						</div>
					</Col>
					<Col className='mx-3  text-center'>
						<div className='footer-heading'>
							<h5>Quick Links</h5>
						</div>
						<div className='quick-links'>
							<p>
								<a href='#' className='text-decoration-none'>
									{arrow} Join Us
								</a>
							</p>
							<p>
								<a href='#' className='text-decoration-none'>
									{arrow} About Us
								</a>
							</p>
							<p>
								<a href='#' className='text-decoration-none'>
									{arrow} Features
								</a>
							</p>
							<p>
								<a href='#' className='text-decoration-none'>
									{arrow} Feedbacks
								</a>
							</p>
							<p>
								<a href='#' className='text-decoration-none'>
									{arrow} Contact Us
								</a>
							</p>
						</div>
					</Col>
					<Col className='mx-3 '>
						<div className='footer-heading'>
							<h5>Latest News</h5>

							<p>
								<b>Yoga techniques to help relieve stress and anxiety</b> <br />
								<small>April 19,2022</small> <br />
								------------------------------
								<br />
							</p>
							<p>
								<b>Yoga techniques to help relieve stress and anxiety</b> <br />
								------------------------------
								<br />
								<small>May 02,2020</small>
								<br />
							</p>
						</div>
					</Col>
					<Col className='mx-3'>
						<div className='footer-heading'>
							<h5>Stay Connected</h5>
							<div>
								<p>{location} 256 Mohra Rd, North London, UK</p>
								<p>{mobile} +123 456 7890</p>
								<p>{mail} jarin.tasnim7892@gmail.com</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='border-top container text-center mx-auto'>
					<p> &copy; 2021 Created by Promi</p>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
