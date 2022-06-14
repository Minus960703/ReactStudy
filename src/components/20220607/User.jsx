import React, { useState } from 'react';
import ModifyUser from './ModifyUser';
import UserRemote from './UserRemote';
import styles from './User.module.css'

const User = ({ user, removeUser, toggleUser, toggleInputs, updateUser }) => {
  const { username, email, id, active, update } = user;

  return (
    <div>
      <div className='user'>
        <div>
          <b className={active ? `${styles.active} ${styles.content}` : `${styles.content}`} onClick={() => toggleUser(id)}>
            {username}
          </b>
          &nbsp;
          ({email})
        </div>
        <div>
          <button onClick={() => { removeUser(id) }}>삭제</button>
          <button onClick={() => { toggleInputs(id) }}>수정</button>
        </div>
      </div>
      <div style={update
        ? { display: 'block' }
        : { display: 'none' }
      }>
        <ModifyUser user={user} updateUser={updateUser} />
        {/* <UserRemote user={user} updateUser={updateUser} /> */}
      </div>
    </div>
  );
};

export default React.memo(User);