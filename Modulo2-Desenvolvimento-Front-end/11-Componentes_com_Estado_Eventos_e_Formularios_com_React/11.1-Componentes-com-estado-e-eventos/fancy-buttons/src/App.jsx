import React from 'react';
import './App.css';
import CriaBotão from './CriaBotão';

class App extends React.Component {
  
  render() {
    return <div>
      <CriaBotão></CriaBotão>
      <CriaBotão />
      <CriaBotão />
     </div> 
    
  }
}

export default App;