import React from 'react';

import Header from './header';
import Slider from './slider';
import Services from './services';
import CreditCalculator from './credit-calculator';
import Map from './map';
import Footer from './footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
				<Slider />
				<Services />
				<CreditCalculator />
				<Map />
      </main>
			<Footer />
    </div>
  )
}

export default App;
