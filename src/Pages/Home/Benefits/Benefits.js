import React from 'react';
import './Benefits.css';
import image from '../../../Images/benefit1.png';
import { Col, Row } from 'react-bootstrap';

const Benefits = () => {
	return (
		<div className='container'>
			<h1 className='text-center my-5'> Reasons to Practice Yoga</h1>
			<Row className=''>
				<Col className='my-auto'>
					<div className='mx-auto'>
						<h4 className='fw-bold'>Good for Health</h4>
						<p>
							<small>
								Yoga Fit is where you can gain balance of metabolism. Maintain
								healthy weight, beautiful strong body and control your hunger.
							</small>
						</p>
					</div>
					<div>
						<h4 className='fw-bold'>Addition of Energy</h4>
						<p>
							<small>
								Some styles of yoga, such as ashtanga and power yoga, are very
								physical. Practicing one of these styles will help you improve
								muscle tone. But even less vigorous styles of yoga, such as
								Iyengar or hatha, can provide strength and endurance benefits.
							</small>
						</p>
					</div>
					<div>
						<h4 className='fw-bold'>Breathing Benefits</h4>
						<p>
							<small>
								Yoga usually involves paying attention to your breath, which can
								help you relax. It may also call for specific breathing
								techniques. But yoga typically isn't aerobic, like running or
								cycling, unless it's an intense type of yoga.
							</small>
						</p>
					</div>
				</Col>
				<Col>
					<img className='mx-auto text-center ' src={image} alt='' srcset='' />
				</Col>
				<Col className='my-auto'>
					<div>
						<h4 className='fw-bold'>Relaxation and Refresh</h4>
						<p>
							<small>
								Regular yoga practice may reduce levels of stress and body-wide
								inflammation, contributing to healthier hearts. Several of the
								factors contributing to heart disease, including high blood
								pressure and excess weight, can also be addressed through yoga
							</small>
						</p>
					</div>
					<div>
						<h4 className='fw-bold'>Beauty of Body</h4>
						<p>
							<small>
								Yoga Fit iimproves blood circulation and decreases blood
								pressure of the body. A lower pulse rate helps your heart.
							</small>
						</p>
					</div>
					<div>
						<h4 className='fw-bold'>Free from Stress</h4>
						<p>
							<small>
								Helps to feel increased mental and physical energy, a boost in
								alertness and enthusiasm, and fewer negative feelings after
								getting into a routine of practicing yoga.
							</small>
						</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Benefits;
