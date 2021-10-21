import React, { useEffect, useState } from 'react';
import Program from '../Program/Program';

const Programs = () => {
	const [programs, setPrograms] = useState([]);
	useEffect(() => {
		fetch('service.json')
			.then((response) => response.json())
			.then((data) => setPrograms(data));
	}, []);
	return (
		<div className='container'>
			<h1 className='text-center my-5'>Our Yoga Programs</h1>
			<div className='row my-5'>
				{programs.map((program) => (
					<Program key={program.id} program={program}></Program>
				))}
			</div>
		</div>
	);
};

export default Programs;
