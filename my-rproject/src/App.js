import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
 
import SignInSide from './Stylecompo/SignInSide';
import Demosignup from './Nsignup/Demosignup';
import SignIn from './Stylecompo/SignIn';
const App = () => {
  console.log("app============>>>>>>>>>>.");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Demosignup/>} />
          <Route path='/SignInSide' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;