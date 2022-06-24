import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import ManagerLogin from './components/manager/ManagerLogin';

function App() {
  return (
      <Login>
        <Routes>
          <Route path='/ManagerLogin' element={<ManagerLogin/>}/>
        </Routes>
      </Login>
    
    
  );
}

export default App;
