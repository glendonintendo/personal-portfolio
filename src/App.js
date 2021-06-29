import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
	  <main>
		<About />
		<Portfolio />
		<Contact />
	  </main>
	  <Footer />
    </div>
  );
}

export default App;
