import React, { useEffect, useState } from 'react';
import 'swiper/swiper.min.css';
import { Switch, Route } from 'react-router-dom';

import Error from './pages/Error';

import './App.css';
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';


const App = () => {
  return (
    <>
      
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route component={Error} />
        </Switch>
        <Footer />
      
    </>
  );
};

export default App;
