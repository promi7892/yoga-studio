import React from 'react';
import { Card } from 'react-bootstrap';
import './Tesimonial.css';
import image1 from '../../../Images/1 2.jpg';
import image2 from '../../../Images/2 2.jpg';
import image3 from '../../../Images/3 2.jpg';

const Testimonial = () => {
	return (
		<div>
			<h1 className='text-center mt-5 testmonial-heading'>
				What our Clents Say
			</h1>
			<div className='container my-5 testimonial g-4'>
				<div className='lg-12'>
					<Card className='h-100 m-3'>
						<Card.Img className='test-img w-50' variant='top' src={image3} />
						<Card.Body>
							<Card.Title className='text-center my-3'>
								Sarah M., <br /> <small>CCHS Foundation</small>
							</Card.Title>
							<Card.Text>
								Over all though it was a great experience and we have had lots
								of great feedback. We already started promoting our next event
								and I have been approached by 4 other companies who want to know
								more about it as they want to use it for their own events.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div>
					<Card className='h-100 m-3'>
						<Card.Img variant='top' src={image1} className='test-img w-50' />
						<Card.Body>
							<Card.Title className='text-center my-3'>
								Amy C., <br /> <small>CCHS Foundation</small>
							</Card.Title>
							<Card.Text>
								"I tried MyEvent instead of typical paper raffle tickets. The
								system was easy to set up online and people who couldn't attend
								the event were still able to enter the raffle, which was HUGE
								bump in revenue.",
							</Card.Text>
						</Card.Body>
					</Card>
				</div>

				<div>
					<Card className='h-100 m-3'>
						<Card.Img className='test-img w-50' variant='top' src={image2} />
						<Card.Body>
							<Card.Title className='text-center my-3'>
								Alexander B.
								<br /> <small>Pan-Mass Challenge</small>
							</Card.Title>
							<Card.Text>
								"I cannot tell you how much we loved using this silent auction
								software. Everything was seamless…from set up, to bidding, to
								payment. We will absolutely use MyEvent next year.",
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
