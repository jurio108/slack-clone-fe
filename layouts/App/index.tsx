import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to={'/login'} /> }></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/workspace/channel" element={<Channel />}></Route>
    </Routes>
  );
}

export default App;