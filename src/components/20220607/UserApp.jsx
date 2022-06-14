import React, { createContext, useCallback, useMemo, useReducer, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './UserApp.css';
import useInput from './UseInput';
import UserRemote from './UserRemote';
import produce from 'immer';

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
      // return {
      //   inputs: defaultState.inputs,
      //   users: state.users.concat(action.user)
      // };
      return produce(state, draft => {
        draft.users.push(action.user);
      })
    case 'REMOVE_USER': 
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
      return produce(state, draft => {
        const index = draft.users.find(user => user.id === action.id);
        draft.users.splice(index, 1);
      })
    case 'TOGGLE_USER': 
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id ? { ...user, active: !user.active } : user
      //   )
      // }
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
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
  const [state, dispatch] = useReducer(reducer, defaultState);

  const { users } = state;

  const count = useMemo(() => activeUserCount(users), [users]);

  return (
    <UserDisPatch.Provider value={dispatch}>
      <div className='area'>
        <div className="count">활성화 유저 수 : {count}</div>
        <UserList users={users} />
        <CreateUser users={users} />
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