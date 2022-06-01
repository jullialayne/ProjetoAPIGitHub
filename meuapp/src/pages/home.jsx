import React  from 'react'; 
import '../style/style.css';
import { Link } from 'react-router-dom'; 
import Header from '../partials/Header/header';
 
const Home = () => {

  return (
    <>
        <h1> Home </h1>
        <Header />
    </>
  );
}

export default Home;