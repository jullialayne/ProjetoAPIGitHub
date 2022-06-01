import React,{useState} from 'react';
import Template from './templates/template';
import './style/style.css';
import Counter from './pages/counter';
import Albuns from './pages/albuns';
import Users from './pages/users';
import Home from './pages/home';

import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

 
function App() {
  return <Home />;

}

export default App;