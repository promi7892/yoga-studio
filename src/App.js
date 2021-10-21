import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/404/NotFound';
import Register from './Pages/Register/Register';
import Program from './Pages/Home/Program/Program';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path='/'>
							<Home></Home>
						</Route>
						<Route path='/home'>
							<Home></Home>
						</Route>

						<Route path='/booking/:serviceId' exact component={<Program />}>
							<Booking></Booking>
						</Route>

						<Route path='/contact'>
							<Contact></Contact>
						</Route>

						<Route path='/login'>
							<Login></Login>
						</Route>

						<Route path='/register'>
							<Register></Register>
						</Route>

						<Route path='*'>
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
