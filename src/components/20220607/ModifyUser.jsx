import React, { useContext } from 'react';
import useInput from './UseInput';
import { UserDisPatch } from './UserApp';

const ModifyUser = ({ user }) => {
  const { username, email, id } = user;
  const dispatch = useContext(UserDisPatch);

  const [form, onChange] = useInput({
    modify_name: username,
    modify_email: email
  })

  const { modify_name, modify_email } = form;

  return (
    <div>
      <input type="text" name="modify_name" placeholder='이름' defaultValue={username} onChange={onChange} />
      <input type="text" name="modify_email" placeholder='이메일' defaultValue={email} onChange={onChange} />
      <button onClick={() => dispatch({
        type: 'UPDATE_USER',
        id,
        username : modify_name,
        email : modify_email
      })}
      >적용</button>
    </div>
  );
};

export default ModifyUser;