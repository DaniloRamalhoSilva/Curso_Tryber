import './App.css';
import React from 'react';
import Heder from './Header';
import Content from './Content';
import Footer from './Footer';


function App() {

  return (
    <React.Fragment>
      <Heder />
      <Content/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
