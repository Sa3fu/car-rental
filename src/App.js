import React, {BrowserRoute}from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import ManagerLogin from './components/manager/ManagerLogin';

function App() {
  return (
    <div>
      <Login>
        <ManagerLogin/>
      </Login>
    </div>
    
    
  );
}

export default App;
