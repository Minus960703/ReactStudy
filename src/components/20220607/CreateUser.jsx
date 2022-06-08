import React from 'react';

const CreateUser = ({ nickname, email, onChange, onCreate, nicknameRef, emailRef }) => {
  
  return (
    <div className='createUser'>
      <input
        type="text"
        name="nickname"
        placeholder="이름"
        value={nickname}
        onChange={onChange}
        // ref={nicknameRef}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
        // ref={emailRef}
        onKeyUp={e => { if (e.key === 'Enter') onCreate() }}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);