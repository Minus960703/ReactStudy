import React, { useContext, useRef } from 'react';
import useInput from './UseInput';
import { UserDisPatch } from './UserApp';

const CreateUser = ({ users }) => {
  const dispatch = useContext(UserDisPatch);
  const [{ username, email }, onChange, reset] = useInput({
    username: '',
    email: '',
  });

  const nextId = useRef(users.reduce(
    (prev, current) => {
      return prev.id > current.id ? prev : current;
    }
  ).id + 1);

  const inputRefs = useRef([]);

  const addUser = () => {
    for (let i = 0; i < inputRefs.current.length; i++) {
      if (!inputRefs.current[i].value) {
        alert(`${inputRefs.current[i].placeholder} 값을 입력해주세요.`);
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
    });
    reset();
    nextId.current += 1;
    inputRefs.current[0].focus();
  }

  return (
    <div className='createUser'>
      <input
        type="text"
        placeholder='이름'
        name='username'
        value={username}
        // defaultValue={username ? username : ''}
        ref={el => inputRefs.current[0] = el}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder='이메일'
        name='email'
        value={email}
        onChange={onChange}
        ref={el => inputRefs.current[1] = el}
        onKeyUp={e => { if (e.key === 'Enter') {addUser()}}}
      />
      <button onClick={addUser}>추가</button>
    </div>
  );
};

export default React.memo(CreateUser, (prev,next) => prev.addUser === next.addUser);