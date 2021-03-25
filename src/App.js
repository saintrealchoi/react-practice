import React, {useRef, useState} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
// import Wrapper from './Wrapper'

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : '',
  });
  const {username , email} = inputs;
  const onChange = e => {
    const {name , value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const [users,setUsers] = useState([
    {
        id : 1,
        username : 'sungjin',
        email : 'csj7480@naver.com'
    },
    {
        id : 2,
        username : 'eunji',
        email : 'dmswl2223@naver.com'
    }
]);

const nextId = useRef(3);

const onCreate = () =>{
  const user = {
    id : nextId.current,
    ...inputs
  };
  setUsers(users.concat(user));
  setInputs({
    username : '',
    email : ''
  });
  nextId.current += 1;
}

  return (
    <> 
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate} />
      <UserList users = {users}/>
    </>
  );
}

export default App;
