import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from '../topBar/TopBar';
import CardHolder from '../cardHolder/CardHolder'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="App">
      <TopBar/>
      <CardHolder/>
    </div>
  );
}

export default LandingPage;
