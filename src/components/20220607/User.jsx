import React from 'react';
import styles from './User.module.css'

const User = ({ user,removeUser,toggleUser }) => {
  const { username, email, id, active } = user;
  return (
    <div className='user'>
      <div>
        <b className={active ? `${styles.active} ${styles.content}` : `${styles.contnet}`} onClick={() => toggleUser(id)}>
          {username}
        </b>
        &nbsp;
        ({email})
      </div>
      <button onClick={() => {removeUser(id)}}>삭제</button>
    </div>
  );
};

export default React.memo(User);