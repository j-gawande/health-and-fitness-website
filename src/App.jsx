import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Navbar, Courses } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Courses />
      <Features />
      {/* <Possibility /> */}
      <CTA />
      {/* <Blog /> */}
      <Footer />
    </div>
  )
}

export default App;