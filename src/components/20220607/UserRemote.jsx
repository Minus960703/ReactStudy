import React from 'react';
import useInput from './UseInput';

const UserRemote = ({ addUser, user, updateUser }) => {
  const { username, email, id } = user;

  const [form, onChange] = useInput(
    updateUser
      ? { modify_name: username, modify_email: email }
      : { username: '', email: '' }
  )
  
  if (updateUser) {
    const { modify_name, modify_email } = form;
  }
  const ss = ss
  
  // console.log(modify_name)
  
  // if (updateuser) {
  //   const { username, email, id } = user;
  // } 

  // const { modify_username, modify_email } = form;

  // console.log(modify_username)
  
  return (
    <div>
      <input
        type="text"
        placeholder='이름'
        name={updateUser ? 'modify_name' : 'username'}
        defaultValue={username}
        onChange={onChange}
        // ref={userRef}
      />
      <input
        type="text"
        placeholder='이메일'
        name={updateUser ? 'modify_email' : 'email'}
        defaultValue={email}
        onChange={onChange}
        // ref={emailRef}
      />
      {updateUser
        ? <button onClick={()=>{updateUser(id, form.modify_name, form.modify_email)}}>적용</button>
        : <button onClick={() => { addUser(form.username, form.email) }} >추가</button>
      }
      {/* <button>추가</button> */}
    </div>
  );
};

export default UserRemote;