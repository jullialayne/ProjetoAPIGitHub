import React from 'react';

const listCustomer =[
  {
    id:1,
    name:"Jullia",
    skills:["React","Node","CSS"]
  },
  {
    id:2,
    name:"Jessica",
    skills:["React","Node","java"]
  }
]

function App() {

  const handleClick = (e,id) =>{
    console.log("Deletar cliente")
    alert(`Id do cliente: ${id}`)
  }

  const renderCustomers = (customer, index) =>{
    return (
      <div key={`customer-${customer.id}`}>
        <liv>{customer.name}<button onClick={(e) => handleClick(e,customer.id  )}>Deletar Cliente</button></liv>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill,index) =>{
    <div style={{paddingLeft :'30px'}} key={`skill-${index}`}>
      <li>{skill}</li>
    </div>
  }

  return (
    <div >
      <ul>
        {listCustomer.map(renderCustomers)}
      </ul>
    </div>
  );
}

export default App;
