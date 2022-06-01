import React from 'react';
import Header from '../partials/Header/header';
import Nav from '../partials/nav';

const Template = ({pages,children,activePage,onChangePage}) => {
  const title = pages[activePage].text;

  return (
    <>
      <Header title={title} /> 
      <Nav pages={pages} onChangePage={onChangePage}/> 
      {children}
    </>
  );
}

export default Template;
