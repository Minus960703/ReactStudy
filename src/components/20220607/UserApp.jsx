import React, { createContext, useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './UserApp.css';
import useInput from './UseInput';
import UserRemote from './UserRemote';

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
        users: state.users.map(user => 
          user.id === action.id ? { ...user, username: action.username, email: action.email, update: !user.update} : user)
      }
    default:
      return state;
  }
}

export const UserDisPatch = createContext(null);

const UserApp = () => {
  const [{ username, email }, onChange, reset] = useInput(defaultState.inputs);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const { users } = state;
  
  const inputRefs = useRef([]);

  const nextId = useRef(users.reduce(
    (prev, current) => {
      return prev.id > current.id ? prev : current;
    }
  ).id + 1);

  const count = useMemo(() => activeUserCount(users), [users]);

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
    reset();
  }, [username, email]);

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
    <UserDisPatch.Provider value={dispatch}>
      <div className='area'>
        <div className="count">활성화 유저 수 : {count}</div>
        <UserList
          users={users}
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
        {/* <UserRemote
          addUser={addUser}
          user={{ username: username, email: email }}
          // username={username}
          // email={email}
        /> */}
      </div>
    </UserDisPatch.Provider>
  );
};

export default UserApp;