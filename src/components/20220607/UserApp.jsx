import React, { useCallback, useMemo, useRef, useState } from 'react';
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

  const count = useMemo(()=>activeUserCount(users),[users]);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);

  const addUser = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setInputs({
      username: '',
      email: ''
    })
    setUsers(users => users.concat(user))
    nextId.current += 1;
  },[ username, email ]);

  const removeUser = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id))
  },[]);

  const toggleUser = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  },[])

  return (
    <div className='area'>
      <div className="count">활성화 유저 수 : {count}</div>
      <UserList
        users={users}
        toggleUser={toggleUser}
        removeUser={removeUser}
      />
      <CreateUser addUser={addUser} username={username} email={email} onChange={onChange}/>
    </div>
  );
};

export default UserApp;