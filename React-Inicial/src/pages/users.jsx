import React,{useState,useEffect} from 'react'; 
import '../style/style.css'; 
import Loading from '../components/loading';
 
const Users = () => {
  const [isLoading, setIsLoading] =useState(false);
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
      setUsers(data)
      setIsLoading(false)
    })
  },[]);

  return (
    < >
      <Loading visable={isLoading} />
      {users.map(user =>{
        return(
          <div style={{margin:'10px'}}>
            <b>Nome: </b>{user.name} <br />
            <b>Email: </b>{user.email} <br />
            <b>Telefone: </b>{user.phone} <br />
            <b>Site: </b>{user.website} <br />
          </div>
        )
      })}
    </>
  );
}

export default Users;