import React from "react";
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to={'/login'} /> }></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
