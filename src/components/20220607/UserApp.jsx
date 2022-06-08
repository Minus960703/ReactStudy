import React, { useCallback, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './UserApp.css';

const activeUserCount = users => {
  return users.filter(user => user.active).length;
}

const UserApp = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '홍길동',
      email: 'hong@naver.com',
      active: false
    },
    {
      id: 7,
      username: '아무개',
      email: 'amugae@naver.com',
      active: false
    },
    {
      id: 4,
      username: '최진우',
      email: 'cgzoo9607@gmail.com',
      active: true
    }
  ]);

  const { username, email } = inputs;

  const nextId = useRef(users.reduce(
    (prev, current) => {
      return prev.id > current.id ? prev : current;
    }
  ).id + 1);

  const count = activeUserCount(users);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);

  const addUser = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    console.log(user)
    setInputs({
      username: '',
      email: ''
    })
    setUsers(users=>users.concat(user))
    nextId.current += 1;
  }

  const removeUser = id => {

  }

  const toggleUser = id => {

  }

  return (
    <>
      <div className="count">활성화 유저 수 : {count}</div>
      <UserList users={users}/>
      <CreateUser addUser={addUser} username={username} email={email} onChange={onChange}/>
    </>
  );
};

export default UserApp;