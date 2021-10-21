import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<>
			<Navbar
				bg='dark'
				variant='dark'
				sticky='top'
				collapseOnSelect
				expand='lg'
			>
				<Container>
					<Navbar.Brand href='#home'>
						<Navbar.Brand to='#home'>
							<img className='logo ml-5' src={logo} alt='' srcset='' />
						</Navbar.Brand>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Nav.Link as={Link} to='/home'>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to='/booking'>
							Yoga Programs
						</Nav.Link>
						<Nav.Link as={Link} to='/contact'>
							Contact Us
						</Nav.Link>

						{user.email ? (
							<Button onClick={logOut} variant='info'>
								Log Out
							</Button>
						) : (
							<Nav.Link as={Link} to='/login'>
								Login
							</Nav.Link>
						)}

						<Navbar.Text>
							Signed in as: <a href='#login'> {user?.displayName} </a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
