import React from 'react';

const CreateUser = ({ addUser, username, email, onChange }) => {
  return (
    <div className='createUser'>
      <input
        type="text"
        placeholder='이름'
        name='username'
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder='이메일'
        name='email'
        value={email}
        onChange={onChange}
      />
      <button onClick={addUser}>추가</button>
    </div>
  );
};

export default React.memo(CreateUser);