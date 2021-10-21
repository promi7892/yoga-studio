import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../../Images/Banner1.jpg';
import img2 from '../../../Images/banner2.jpg';
import img3 from '../../../Images/banner3.jpg';
import img4 from '../../../Images/banner4.jpg';
import img5 from '../../../Images/banner5.jpg';

const Banner = () => {
	return (
		<>
			<Carousel className='container w-75 my-3'>
				<Carousel.Item interval={1000}>
					<img className='d-block w-100' src={img1} alt='First slide' />
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={img2} alt='Second slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img3} alt='Third slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img4} alt='fourth slide' />
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={img5} alt='fifth slide' />
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Banner;
