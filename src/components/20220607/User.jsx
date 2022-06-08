import React from 'react';
import styles from './User.module.css'

const User = ({ user }) => {
  const { username, email, id, active } = user;
  return (
    <div>
      <b className={active ? `${styles.active} ${styles.content}` : `${styles.contnet}`}>
        {username}
      </b>
      &nbsp;
      ({email})
    </div>
  );
};

export default React.memo(User);