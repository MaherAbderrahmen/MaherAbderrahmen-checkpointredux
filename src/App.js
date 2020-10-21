import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/AddTask/AddTask';
import './components/listTask/listTask';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <listTask/>
      
    </div>
  );
}

export default App;
