import React,{useState} from 'react';
import Template from './templates/template';
import './style/style.css';
import Counter from './pages/counter';
import Albuns from './pages/albuns';
import Users from './pages/users';

const defaultPage = 'albuns';

const pages ={
  albuns: {
    text:'Albuns',
    component: Albuns
  },
  counter: {
    text:'Counter',
    component: Counter
  },
  users: {
    text:'Users',
    component: Users
  }
}

function App() {
  const [page,setPage] = useState(defaultPage);

  const handleChangePage = page =>{
    setPage(page);
  }

  const Page = pages[page].component;

  
  return (
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      {Page && <Page />}
    </Template>

  );
}

export default App;