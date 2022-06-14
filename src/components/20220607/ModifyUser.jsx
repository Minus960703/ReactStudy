import React from 'react';
import useInput from './UseInput';

const ModifyUser = ({ user, updateUser }) => {
  const { username, email, id } = user;

  const [form, onChange] = useInput({
    modify_name: username,
    modify_email: email
  })

  const { modify_name, modify_email } = form;

  return (
    <div>
      <input type="text" name="modify_name" placeholder='이름' defaultValue={username} onChange={onChange} />
      <input type="text" name="modify_email" placeholder='이메일' defaultValue={email} onChange={onChange} />
      <button onClick={() => {updateUser(id, modify_name, modify_email);}}>적용</button>
    </div>
  );
};

export default ModifyUser;