import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes,Navigate, Outlet} from 'react-router-dom';
 

const Register = () =>{
  return <h1>Register</h1>;
}
const Home = () =>{
  return <h1>Home</h1>;
}
const Login = () =>{
  return <h1>Login</h1>;
} 


const App = () => {
  return (
    <Router>
      <Fragment> 
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Fragment>
    </Router>
    
  );
}

const PrivateRoute = () => {
  const auth = false;  
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default App;