import React from 'react';
import Banner from './Banner/Banner';
import Benefits from './Benefits/Benefits';
import Footer from './Footer/Footer';
import Programs from './Programs/Programs';
import Testimonial from './Testimonial/Testimonial';
import Video from './Videos/Video';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Benefits></Benefits>
			<Programs></Programs>
			<Video></Video>
			<Testimonial></Testimonial>
			<Footer></Footer>
		</div>
	);
};

export default Home;
