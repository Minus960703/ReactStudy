import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './UserApp.css';
import useInput from './\bUseInput';

//reducer 구현 후, 상태관리 + 유저 별 수정, 일요일까지 

const activeUserCount = users => {
  return users.filter(user => user.active).length;
}

const defaultState = { 
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: '홍길동',
      email: 'hong@naver.com',
      active: false,
      update: false
    },
    {
      id: 7,
      username: '아무개',
      email: 'amugae@naver.com',
      active: false,
      update: false
    },
    {
      id: 4,
      username: '최진우',
      email: 'cgzoo9607@gmail.com',
      active: true,
      update: false
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT': 
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.value
        }
      }
    case 'ADD_USER':
      return {
        inputs: defaultState.inputs,
        users: state.users.concat(action.user)
      };
    case 'REMOVE_USER': 
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'TOGGLE_USER': 
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      }
    case 'TOGGLE_INPUTS':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, update: !user.update } : user
        )
      }
    case 'UPDATE_USER':
      return {
        ...state,
      }
    default:
      return state;
  }
}

const UserApp = () => {
  const [{ username, email }, onChange, reset] = useInput(defaultState.inputs);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const { users } = state;
  // const { username, email } = state.inputs;
  
  const inputRefs = useRef([]);

  const nextId = useRef(users.reduce(
    (prev, current) => {
      return prev.id > current.id ? prev : current;
    }
  ).id + 1);

  const count = useMemo(() => activeUserCount(users), [users]);

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, []);

  const addUser = useCallback(() => {
    for (let i = 0; i < inputRefs.current.length; i++) {
      if (!inputRefs.current[i].value) {
        alert(`${inputRefs.current[i].name} 값을 입력해주세요.`);
        inputRefs.current[i].focus();
        return;
      }
    }
    dispatch({
      type: 'ADD_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
    inputRefs.current[0].focus();
  }, [username, email]);

  const removeUser = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  },[]);

  const toggleUser = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const toggleInputs = useCallback(id => {
    dispatch({
      type: 'TOGGLE_INPUTS',
      id
    })
  }, []);

  const updateUser = useCallback((id, username, email) => {
    dispatch({
      type: 'UPDATE_USER',
      id,
      username,
      email
    })
  }, []);

  return (
    <div className='area'>
      <div className="count">활성화 유저 수 : {count}</div>
      <UserList
        users={users}
        toggleUser={toggleUser}
        removeUser={removeUser}
        toggleInputs={toggleInputs}
        updateUser={updateUser}
        onChange={onChange}
      />
      <CreateUser
        addUser={addUser}
        username={username}
        email={email}
        onChange={onChange}
        userRef={el => inputRefs.current[0] = el}
        emailRef={el => inputRefs.current[1] = el}
      />
    </div>
  );
};

export default UserApp;