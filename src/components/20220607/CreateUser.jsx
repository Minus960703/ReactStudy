import React from 'react';

const CreateUser = ({ addUser, username, email, onChange, userRef, emailRef }) => {
  return (
    <div className='createUser'>
      <input
        type="text"
        placeholder='이름'
        name='username'
        value={username}
        // defaultValue={username ? username : ''}
        onChange={onChange}
        ref={userRef}
      />
      <input
        type="text"
        placeholder='이메일'
        name='email'
        value={email}
        onChange={onChange}
        ref={emailRef}
        onKeyUp={e => { if (e.key === 'Enter') {addUser()}}}
      />
      <button onClick={addUser}>추가</button>
    </div>
  );
};

export default React.memo(CreateUser, (prev,next) => prev.addUser === next.addUser);