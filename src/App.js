import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio'
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
		<div>
			<Nav />
			<main>
				<Switch>
					<Route exact path='/about' component={About} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/contact' component={Contact} />

					<Route component={About} />
				</Switch>
			</main>
			<Footer />
		</div>
	</Router>
	
  );
}

export default App;
