import React, { Fragment } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default App;
